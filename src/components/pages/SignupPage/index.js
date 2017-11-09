import React from 'react';
import { connect } from 'react-redux';
import { Container, Header, Form, Button, Message } from 'semantic-ui-react';
import Validator from 'validator';

import { signup, resetMessage } from './signup.state';

class SignupPage extends React.Component {

  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  }

  onChange = e => {
    this.props.resetMessage();
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    })
  }

  onSubmit = async () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if ( Object.keys(errors).length === 0) {
      await this.setState({ loading: true });
      await this.props
        .signup(this.state.data)
        .then(() => {
          this.setState((prevState) => ({
              loading: false
            }))
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
    const { data, loading, errors } = this.state;

    return (
      <Container>
        <Header>Sign Up</Header>

        <Form onSubmit={this.onSubmit} loading={loading}>
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

          <Button primary>Sign up now</Button>
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = ({ signupState }) => ({
  message: signupState.message
});

export default connect(mapStateToProps, { signup, resetMessage })(SignupPage);