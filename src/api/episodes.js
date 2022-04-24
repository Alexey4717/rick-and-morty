import gql from 'graphql-tag'

const GET_ALL_EPISODES = gql`
  query episodes($page: Int!) {
    episodes(page: $page) {
      info {
    	  count
    	  pages
  	  }
  	  results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

export default GET_ALL_EPISODES