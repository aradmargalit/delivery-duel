/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  fragment SearchResults on Businesses {\n    total\n    business {\n      name\n      url\n      rating\n      photos\n      categories {\n        title\n      }\n      location {\n        address1\n        city\n      }\n    }\n  }\n':
    types.SearchResultsFragmentDoc,
  '\n  query SearchByName($name: String!, $radius: Float!, $limit: Int!) {\n    search(\n      location: $name\n      radius: $radius\n      open_now: true\n      limit: $limit\n      sort_by: "rating"\n      term: "dinner"\n      attributes: ["restaurants_delivery"]\n    ) {\n      ...SearchResults\n    }\n  }\n':
    types.SearchByNameDocument,
  '\n  query searchByCoords($longitude: Float!, $latitude: Float!, $radius: Float!, $limit: Int!) {\n    search(\n      longitude: $longitude\n      latitude: $latitude\n      radius: $radius\n      open_now: true\n      limit: $limit\n      sort_by: "rating"\n      term: "dinner"\n      attributes: ["restaurants_delivery"]\n    ) {\n      ...SearchResults\n    }\n  }\n':
    types.SearchByCoordsDocument
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment SearchResults on Businesses {\n    total\n    business {\n      name\n      url\n      rating\n      photos\n      categories {\n        title\n      }\n      location {\n        address1\n        city\n      }\n    }\n  }\n'
): (typeof documents)['\n  fragment SearchResults on Businesses {\n    total\n    business {\n      name\n      url\n      rating\n      photos\n      categories {\n        title\n      }\n      location {\n        address1\n        city\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query SearchByName($name: String!, $radius: Float!, $limit: Int!) {\n    search(\n      location: $name\n      radius: $radius\n      open_now: true\n      limit: $limit\n      sort_by: "rating"\n      term: "dinner"\n      attributes: ["restaurants_delivery"]\n    ) {\n      ...SearchResults\n    }\n  }\n'
): (typeof documents)['\n  query SearchByName($name: String!, $radius: Float!, $limit: Int!) {\n    search(\n      location: $name\n      radius: $radius\n      open_now: true\n      limit: $limit\n      sort_by: "rating"\n      term: "dinner"\n      attributes: ["restaurants_delivery"]\n    ) {\n      ...SearchResults\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query searchByCoords($longitude: Float!, $latitude: Float!, $radius: Float!, $limit: Int!) {\n    search(\n      longitude: $longitude\n      latitude: $latitude\n      radius: $radius\n      open_now: true\n      limit: $limit\n      sort_by: "rating"\n      term: "dinner"\n      attributes: ["restaurants_delivery"]\n    ) {\n      ...SearchResults\n    }\n  }\n'
): (typeof documents)['\n  query searchByCoords($longitude: Float!, $latitude: Float!, $radius: Float!, $limit: Int!) {\n    search(\n      longitude: $longitude\n      latitude: $latitude\n      radius: $radius\n      open_now: true\n      limit: $limit\n      sort_by: "rating"\n      term: "dinner"\n      attributes: ["restaurants_delivery"]\n    ) {\n      ...SearchResults\n    }\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
