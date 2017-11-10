import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import FormSignup from './FormSignup';

const SignupPage = () => (
  <Container>
    <Header>Sign Up</Header>
    <FormSignup />
  </Container>
);

export default SignupPage;