import { gql } from 'graphql-request';
import { client } from '../client';

const searchRestaurants = gql`
  {
    search(location: "san francisco") {
      total
      business {
        name
      }
    }
  }
`;

export async function fetchRestaurants() {
  try {
    // return client.request(searchRestaurants);
  } catch (e) {
    console.error(e);
  }
}
