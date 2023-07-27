import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://hokben-orchestrator.herokuapp.com",
  cache: new InMemoryCache(),
});
