# typescript-lib-boilerplate

This is a boilerplate repository for creating npm packages written in TypeScript.

## Installation:

To install all dependencies run:
```
npm i
```

It will install:
- `dependencies` and `devDependencies` from ./package.json
- `peerDependencies` from ./package.json thanks to `install-peers-cli`
- `dependencies` and `devDependencies` from ./example/package.json (example `create react app` for testing)

## Developing your library:

To start developing your library, run `npm run dev`. It will build your library and run example `create-react-app` where you can test your library. Each time you make changes to your library or example app, app will be reloaded to reflect your changes.

## Typescript

This boilerplate lets you develop your libraries in Typescript and you can simultaneously test it in Typescript example create-react-app.
