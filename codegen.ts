
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://api.yelp.com/v3/graphql': {
        headers: {
          Authorization: `Bearer ${process.env.YELP_GQL_API_KEY}`,
        },
      },
    },
  ],
  documents: "src/lib/gql/**/*.ts",
  generates: {
    "src/__generated__/gql/": {
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    },
    './schema.graphql': {
      plugins: ['schema-ast']
    }
  }
};

export default config;
