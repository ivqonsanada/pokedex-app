import "./App.css";
import Routes from "routes";
import { ApolloProvider } from "@apollo/client";
import client from "graphql/client";
import { PokemonProvider } from "contexts/pokemon-context";
import { Toaster } from "react-hot-toast";
import { TopBarProvider } from "contexts/topbar-context";

function App() {
  return (
    <ApolloProvider client={client}>
      <PokemonProvider>
        <TopBarProvider>
          <Toaster
            containerStyle={{
              top: 72,
            }}
          />
          <Routes />
        </TopBarProvider>
      </PokemonProvider>
    </ApolloProvider>
  );
}

export default App;
