import { createHttpLink } from 'apollo-link-http'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'

const httpLink = createHttpLink({
  uri: `${process.env.VUE_APP_API_URL}`,
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

export default apolloClient