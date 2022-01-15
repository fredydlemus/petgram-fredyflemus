import React from "react";
import { useInputValue } from "../hooks/useInputValue";
import { Form, Input, Button, Title, Error } from "./styles";
import { useMutation } from "@apollo/client";
import { AppContext } from "../../Context";

export const UserForm = ({ title, mutationGql }) => {
  const email = useInputValue("");
  const password = useInputValue("");
  const [mutation, { data, loading, error }] = useMutation(mutationGql);
  const { login } = React.useContext(AppContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const input = { email: email.value, password: password.value };
    const variables = { input };
    mutation({ variables }).then(({ data }) => {
      const token = data.login || data.signup;
      login(token);
    });


  };

  return (
    <>
      <Form disabled={loading} onSubmit={onSubmit}>
        <Title disabled={loading}>{title}</Title>
        <Input disabled={loading} placeholder="Email" {...email} />
        <Input
          disabled={loading}
          placeholder="Password"
          type="password"
          {...password}
        />
        <Button disabled={loading}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};
