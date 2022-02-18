import "./App.css";
import Routes from "routes";
import { ApolloProvider } from "@apollo/client";
import client from "graphql/client";
import { PokemonProvider } from "contexts/pokemon-context";

function App() {
  return (
    <ApolloProvider client={client}>
      <PokemonProvider>
        <Routes />
      </PokemonProvider>
    </ApolloProvider>
  );
}

export default App;
