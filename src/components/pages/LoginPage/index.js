import React from 'react';
import { connect } from 'react-redux';
import { Container, Header, Form, Button, Message } from 'semantic-ui-react';
import Validator from 'validator';

import { submit, resetMessage } from './login.state';
import { firebaseApp } from '../../../firebase';

class LoginPage extends React.Component {

  state = {
    data: {
      email: '',
      password: ''
    },
    errors: {},
  }

  onChange = e => {
    this.props.resetMessage();
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    })
  }

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if ( Object.keys(errors).length === 0) {
       this.props.submit(this.state.data)
    };
  }

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank";

    return errors;
  }

  signout = () => {
    firebaseApp.auth().signOut()
  }

  render() {
    const { data, errors, loading } = this.state;

    return (
      <Container>
        <Header>Login</Header>

        <Form onSubmit={this.onSubmit} loading={this.props.loading}>
          { this.props.message && <Message color='red'>{this.props.message}</Message> }

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

          <Button primary>Login now</Button>


        </Form>

        { localStorage.uid && <div>{ localStorage.uid }</div> }

      </Container>
    )
  }
}

const mapStateToProps = ({ loginState }) => ({
  user: loginState.user,
  loading: loginState.loading,
  message: loginState.message
})

export default connect(mapStateToProps, { submit, resetMessage })(LoginPage);