# Infosel UI Component Library 📚

This project is created as a Coding Challenge to get the Frontend Lead role in Infosel.\
It is a UI Component Library that will be used in the [Infosel Trading Criptocurrencies Dashboard](https://github.com/ricardomeza/infosel-trading-criptocurrencies-dashboard) Repository.

## How to use it

### Installation

You have to install it as a regular NPM package:\
`npm install @ricardomeza/infosel-ui-component-library`

### Using components

Just import the component you need to and use it as a regular component:

```Typescript
import { Button } from '@ricardomeza/infosel-ui-component-library'
…

const App = () => (
    <Button label="Submit cake!" size="small" />
)
…
```

## How to contribute

### Local environment

You will need the following tools installed in your super faster machine:

- Node >= v16.13.0
- NPM >= v8.1.0
- Git

### Get the Repository

Yeah, like any other repo you have to clone it:

```shell
$ git clone https://github.com/ricardomeza/infosel-ui-component-library.git
```

### Install tons of packages

```shell
$ npm i
```

### The Component Folder Structure Legend

Each component must have the following folder and files to be included in this library, lets use as an example the creation of a `Lightsaber` component.

- `index.ts` to export de component
- `Lightsaber.tsx` all the React stuff
- `Lightsaber.scss` all the SASS salad
- `constants.ts` here is the room for those constants you need in your `tsx` file
- `/stories` in this folder you have to place the files to add your new shinning component to the Storybook
- `/tests` the place to test that your component is free of coronavirus and other bugs
- `/components/index.ts` export your component in this list

Example of a component folder structure:

```
src
├── components
…
│   ├── Lightsaber
│   │   ├── stories
│   │   │   ├── constants.ts
│   │   │   ├── interface.d.ts
│   │   │   └── Lightsaber.stories.tsx
│   │   ├── tests
│   │   │   └── Lightsaber.test.tsx
│   │   ├── constants.ts
│   │   ├── Lightsaber.scss
│   │   ├── Lightsaber.tsx
│   │   └── index.ts
…
└── index.ts
…
```

### How to build and publish the new library version?

This project has implemented Github Actions to create new versions of the library that includes your changes or new components.

#### Increment the version number

Github Action will shoot an error if you don't increment the version number, so be sure to do it:

- Open the `package.json`
- Find the `"version": "1.0.0",` entry and increment the version number following at least the basic [Semantic Versioning Scheme](https://semver.org/): [major].[minor].[patch]

#### Deploy

The `main.yml` file includes all the steps to deploy to Github, you'll find them here:

```
.github
├── workflows
│   └── main.yml
```

You have to `push` the `main` branch or create a pull request that points to the `main` branch too to trigger the Github Action that builds the new library version.

## Available Scripts ⚙️

In the project directory, you can run:

### `npm run rollup` 🗜

Build the library.\
All the compiled and bundled files will be generated magically.

### `npm run test` 🧪

Launches the tests execution.

### `npm run storybook` 🚂

Launches the Storybook Server to browser all the components created.

### `npm run build-storybook 🗜🚂

Build the files needed to deploy and launch Storybook in a Web Server.

#### npm run lint-check 🔭

ESLint is executed to search and find problems in your code.

#### npm run lint-fix 🩹

Same as the previous script but here the problems are fixed automatically.

#### npm run lint 🔭➕🩹

The `lint-check` and `lint-fix` scripts are launched in sequential order.
