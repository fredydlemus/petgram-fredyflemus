import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { ApolloProvider, InMemoryCache, ApolloClient, createHttpLink } from "@apollo/client";
import { AppProvider } from "./Context";
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const httpLink = createHttpLink({
  uri: "https://petgram-api-fredyflemus.vercel.app/graphql"
});

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),

  onError: onError(({ network }) => {
    if (network && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    {" "}
    <AppProvider>
      <App />
    </AppProvider>{" "}
  </ApolloProvider>,
  document.getElementById("app")
);
