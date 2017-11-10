import React, { Component } from 'react';
import { connect } from 'react-redux';
import Validator from 'validator';
import { Link } from 'react-router-dom';
import { submit } from './login.state';

import { firebaseApp } from '../../../../firebase';
import { Form, Button, Message } from 'semantic-ui-react';

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: '',
        password: ''
      },
      errors: {},
      message: null,
    }

    this.loading = false;
  }

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    })
  }

  onSubmit = () => {
    const { data } = this.state;

    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if ( Object.keys(errors).length === 0) {
      this.loading = true;
      firebaseApp.auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then(user => {
          this.props.submit(user)
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
          this.setState({ message: err.message })
        })
    };
  }

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank";

    return errors;
  }

  render() {
    const { data, message, errors } = this.state;
    return (
      <Form onSubmit={this.onSubmit} loading={this.loading}>
        { message && <Message color='red'>{message}</Message> }

        <Form.Field>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            placeholder="example@email.com"
            onChange={this.onChange}
          />
          { errors.email && <Message color='red'>{errors.email}</Message> }
        </Form.Field>

        <Form.Field>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            placeholder="Make it secure"
            onChange={this.onChange}
          />
          { errors.password && <Message color='red'>{errors.password}</Message> }
        </Form.Field>

        <span>
          <Button primary>Login now</Button>
          <Link to="/signup">Sign up</Link>
        </span>
      </Form>
    )
  }
}

export default connect(null, { submit })(FormLogin);