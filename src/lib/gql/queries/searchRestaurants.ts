import { gql } from 'graphql-request';
import { client } from '../client';

const SEARCH_RADIUS_METERS = 25_000; // about 15 miles
const RESULT_LIMIT = 12;

const searchByName = gql`
  query searchByName($name: String!, $radius: Float!, $limit: Int!) {
    search(location: $name, radius: $radius, open_now: true, limit: $limit) {
      total
      business {
        name
      }
    }
  }
`;

const searchByCoords = gql`
  query searchByCoords($longitude: Float!, $latitude: Float!, $radius: Float!, $limit: Int!) {
    search(
      longitude: $longitude
      latitude: $latitude
      radius: $radius
      open_now: true
      limit: $limit
    ) {
      total
      business {
        name
      }
    }
  }
`;

export async function fetchRestaurants(searchParams: URLSearchParams) {
  const baseVariables = {
    limit: RESULT_LIMIT,
    radius: SEARCH_RADIUS_METERS
  };
  if (searchParams.has('manualLocation')) {
    const variables = { ...baseVariables, name: searchParams.get('manualLocation') };

    try {
      return client.request(searchByName, variables);
    } catch (e) {
      console.error(e);
    }
    return;
  }

  const variables = { ...baseVariables, latitude: searchParams.get('lat'), longitude: searchParams.get('lon') };
  try {
    return client.request(searchByCoords, variables);
  } catch (e) {
    console.error(e);
  }
}
