import { client } from '../client';
import { graphql } from '../../../__generated__/gql/gql';
import { milesToMeters } from '$lib/utils/converters/milesToMeters';
import { SEARCH_RADIUS_MILES_MAX } from '$lib/config/searchConfig';

const RESULT_LIMIT = 12;

export type Business = {
  name: string;
  url: string;
  rating: number;
  photos: string[];
  categories: { title: string }[];
};

// fragments are global, and codegen cannot parse types if they are interpolated
// https://github.com/dotansimha/graphql-code-generator/issues/6808#issuecomment-939242951
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const searchResultsFragment = graphql(`
  fragment SearchResults on Businesses {
    total
    business {
      name
      url
      rating
      photos
      categories {
        title
      }
    }
  }
`);

const searchByName = graphql(`
  query SearchByName($name: String!, $radius: Float!, $limit: Int!) {
    search(
      location: $name
      radius: $radius
      open_now: true
      limit: $limit
      sort_by: "rating"
      term: "dinner"
      attributes: ["restaurants_delivery"]
    ) {
      ...SearchResults
    }
  }
`);

const searchByCoords = graphql(`
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
      ...SearchResults
    }
  }
`);

export async function fetchRestaurants(searchParams: URLSearchParams) {
  // Default to and cap at our max to prevent API abuse
  const radius = Math.min(
    parseInt(searchParams.get('radius') ?? SEARCH_RADIUS_MILES_MAX.toString(), 10),
    SEARCH_RADIUS_MILES_MAX
  );

  const baseVariables = {
    limit: RESULT_LIMIT,
    radius: milesToMeters(radius)
  };

  if (searchParams.has('manualLocation')) {
    const name = searchParams.get('manualLocation') || '';
    const variables = { ...baseVariables, name };

    return client.request(searchByName, variables);
  }

  const variables = {
    ...baseVariables,
    latitude: parseInt(searchParams.get('lat') ?? '0', 10),
    longitude: parseInt(searchParams.get('lon') ?? '0', 10)
  };
  return client.request(searchByCoords, variables);
}
