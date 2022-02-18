import "./App.css";
import Routes from "routes";
import { ApolloProvider } from "@apollo/client";
import client from "graphql/client";
import { PokemonProvider } from "contexts/pokemon-context";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ApolloProvider client={client}>
      <PokemonProvider>
        <Toaster />
        <Routes />
      </PokemonProvider>
    </ApolloProvider>
  );
}

export default App;
