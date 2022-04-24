import gql from 'graphql-tag'

const GET_ALL_LOCATIONS = gql`
  query locations($page: Int!) {
    locations(page: $page) {
      info {
    	  count
    	  pages
  	  }
  	  results {
        id
        name
        type
        dimension
      }
    }
  }
`;

export default GET_ALL_LOCATIONS