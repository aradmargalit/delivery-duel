import { YELP_GQL_API_KEY, YELP_GQL_URL } from '$env/static/private';
import { GraphQLClient } from 'graphql-request';

function getToken() {
  return YELP_GQL_API_KEY;
}

export const client = new GraphQLClient(YELP_GQL_URL, {
  headers: {
    authorization: `Bearer ${getToken()}`
  }
});
