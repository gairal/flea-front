# flea-front &middot; [![CI Status](https://github.com/gairal/flea-front/workflows/CI/badge.svg)](https://github.com/gairal/flea-front/actions)

> A React App [TypeScript](https://www.typescriptlang.org/),
> [Jest](https://jestjs.io/), [Prettier](https://prettier.io/), [eslint](https://eslint.org/) and ❤️

### Table of Contents

- [Todo](#todo)
- [File structure](#file-structure)
- [Quick Start](#quick-start)
- [Commands](#commands)

### Todo

- cookie disclaimer
- Google Analytics
- switch to Gatsby
- client error catcher with Google analytics
- SEO
- use React.Lazy
- designs
  - https://www.valerie-objects.com/
  - https://artistoric.com/
  - https://www.catawiki.com/en/c/3
  - https://helenstoreyantiques.com/
  - https://maisonfeteetcie.com/

### File structure

```markup
flea-front/
 ├──dist/                            * generated library
 │
 ├──src/                             * source TypeScript Files
 │   ├──app/
 │   │
 │   └──index.ts                     * our lib entry point
 │
 └──*.*                              * configuration files
```

### Quick Start

```bash
# clone the repo
git clone git@github.com:gairal/flea-front.git

# change directory to the repo
cd flea-front

# install the dependencies
yarn

# start the TypeScript watcher
yarn start
```

### Commands

- `yarn run build`: Production build generated into ./dist
- `yarn run clean`: Deletes build dir ./dist
- `yarn run dev`: launches a TypeScript watcher
- `yarn run lint`: lints the whole sources and tests with eslint
- `yarn test`: runs Jest
- `yarn start`: runs the project in production mode
