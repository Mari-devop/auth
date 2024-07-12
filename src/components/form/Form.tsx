import React from 'react';
import { Container, FormContainer } from './Form.styled';
import { FormProps } from './types';

const Form: React.FC<FormProps> = ({ children, text, onSubmit }) => {
  return (
    <Container>
      <FormContainer onSubmit={onSubmit}>
        {children}
        <button type="submit">{text}</button>
      </FormContainer>
    </Container>
  );
};

export default Form;
