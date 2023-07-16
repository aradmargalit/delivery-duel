import { gql } from 'graphql-request';
import { client } from '../client';

const SEARCH_RADIUS_METERS = 25_000; // about 15 miles
const RESULT_LIMIT = 12;

export type Business = {
  name: string;
  url: string;
  rating: number;
  photos: string[];
};

export type RestaurantResult = {
  search: {
    business: Business[];
  };
};

const searchByName = gql`
  query searchByName($name: String!, $radius: Float!, $limit: Int!) {
    search(
      location: $name
      radius: $radius
      open_now: true
      limit: $limit
      sort_by: "rating"
      term: "dinner"
      attributes: ["restaurants_delivery"]
    ) {
      total
      business {
        name
        url
        rating
        photos
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
      sort_by: "rating"
      term: "dinner"
      attributes: ["restaurants_delivery"]
    ) {
      total
      business {
        name
        url
        rating
        photos
      }
    }
  }
`;

export async function fetchRestaurants(searchParams: URLSearchParams): Promise<RestaurantResult> {
  const baseVariables = {
    limit: RESULT_LIMIT,
    radius: SEARCH_RADIUS_METERS
  };
  
  if (searchParams.has('manualLocation')) {
    const variables = { ...baseVariables, name: searchParams.get('manualLocation') };

    return client.request(searchByName, variables);
  }

  const variables = {
    ...baseVariables,
    latitude: searchParams.get('lat'),
    longitude: searchParams.get('lon')
  };
  return client.request(searchByCoords, variables);
}
