import { ApolloClient, InMemoryCache } from "@apollo/client";
//NOTE: GraphQL base URL
const BASE_URL = 'https://beta.pokeapi.co/graphql/v1beta'

const client = new ApolloClient({
    uri: BASE_URL,
    cache: new InMemoryCache(),
});

export default client;