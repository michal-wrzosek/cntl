# cntl

**c**lass **n**ames **t**emplate **l**iterals for **tailwind** type of frameworks

---

This is a small library that helps you write your class names in a more clear, readable and composable way. If you use a library like **tailwind** css where you compose your styles by providing lots of class names this utility tool can help you a lot.

Instead of writing class names directly on your HTML tags in one long string, you can move your class names to separate variable and place your class names, one by one, in multiple rows like you would do it when writing typical CSS.

Also, this way of defining your styles looks a bit like styled components styles.

## Installation

```
npm i cntl
```

This package already comes with TypeScript typings.

## Using

Simple usage (React + tailwind):

```typescript
import cntl from 'cntl';

const buttonCN = cntl`
  bg-blue-500
  hover:bg-blue-700
  text-white
  font-bold
  py-2
  px-4
  rounded
  focus:outline-none
  focus:shadow-outline
`;

const Button = () => <div className={buttonCN}>Click me</div>
```

You can also provide some conditional styles (React + tailwind):

```typescript
import cntl from 'cntl';

const buttonCN = ({ isRed }: { isRed: boolean }) => cntl`
  hover:bg-blue-700
  text-white
  font-bold
  py-2
  px-4
  rounded
  focus:outline-none
  focus:shadow-outline

  ${
    isRed
      ? cntl`
        bg-red-500
      `
      : cntl`
        bg-blue-500
      `
  }
`;

const Button = ({ isRed }: { isRed: boolean }) => <div className={buttonCN({ isRed })}>Click me</div>
```

# Developing this library

This library was bootstraped with [typescript-lib-boilerplate](https://github.com/michal-wrzosek/typescript-lib-boilerplate)

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

To start developing this library, run `npm run dev`. It will build your library and run example `create-react-app` where you can test your library. Each time you make changes to your library or example app, app will be reloaded to reflect your changes.

## Typescript

This boilerplate lets you develop your libraries in Typescript and you can simultaneously test it in Typescript example create-react-app.
