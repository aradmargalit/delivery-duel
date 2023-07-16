import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://api.yelp.com/v3/graphql': {
        headers: {
          Authorization: `Bearer ${process.env.YELP_GQL_API_KEY}`
        }
      }
    }
  ],
  documents: 'src/lib/gql/**/*.ts',
  config: {
    useTypeImports: true
  },
  generates: {
    'src/__generated__/gql/': {
      preset: 'client',
      presetConfig: {
        // TODO: re-enable
        fragmentMasking: false
      }
    },
    './graphql.schema.json': {
      plugins: ['introspection']
    },
    './schema.graphql': {
      plugins: ['schema-ast']
    }
  }
};

export default config;
