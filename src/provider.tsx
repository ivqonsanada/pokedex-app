import { ApolloProvider } from "@apollo/client";
import { PokemonProvider } from "contexts/pokemon-context";
import { TopBarProvider } from "contexts/topbar-context";
import client from "graphql/client";

const Provider: React.FC = ({ children }) => {
  return (
    <>
      <ApolloProvider client={client}>
        <TopBarProvider>
          <PokemonProvider>{children}</PokemonProvider>
        </TopBarProvider>
      </ApolloProvider>
    </>
  );
};

export default Provider;
