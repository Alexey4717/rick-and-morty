import gql from 'graphql-tag'

const GET_ALL_CHARACTERS = gql`
  query characters($page: Int!) {
    characters(page: $page) {
      info {
    	  count
    	  pages
    	  next
    	  prev
  	  }
  	  results {
        id
        name
        status
        species
        origin {
          name
        }
        location {
          name
        }
        image
      }
    }
  }
`;

export default GET_ALL_CHARACTERS;