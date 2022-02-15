import "./App.css";
import Routes from "routes";
import { ApolloProvider } from "@apollo/client";
import client from "graphql/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}

export default App;
