# Delivery Duel

Please, somebody, help us decide where to eat!

## Tech
- [SvelteKit](https://kit.svelte.dev/) for UI layer, routing, app framework
- [98.css](https://jdan.github.io/98.css/) for the Windows 98 theme
- [Tailwind CSS](https://tailwindcss.com/) for other styles
- [Yelp's GraphQL API](https://docs.developer.yelp.com/docs/graphql-intro) for fetching nearby restaurants

## Development

Node 18.14.x

```sh
npm install
npm run dev
```

### GraphQL

In order to generate types, you can run the codegen command.

```sh
YELP_GQL_API_KEY=yourToken npm run codegen
```

You may need to silence warnings from some of the generated files if they complain after a `npm run check`.

```ts
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
```

## Deployment

Deployed on Vercel on pushes to `main`.

## Building

To create a production version of the app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
