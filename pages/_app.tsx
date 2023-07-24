import React from "react";
import { ApolloProvider } from "@apollo/client";
import MainLayout from "../layouts/main-layout";
import GlobalStyle from "../styles/global-styles";
import graphqlClient from "../gql/graphql-client";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <React.StrictMode>
    <ApolloProvider client={graphqlClient}>
      <GlobalStyle />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  </React.StrictMode>
);

export default MyApp;
