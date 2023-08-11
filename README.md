# Starter Project (Desktop App, Electron, ReactJS, Typescript)

A minimal yet complete example on production-ready Electron Desktop App written in ReactJS + Typescript.

## Background

Refer to [General Introduction](https://github.com/project-starter-collection/general-introduction/tree/main#readme).

## Technology Stack

## Getting Started

```bash
# Install
yarn

# Start local
yarn start

# Building distributables
yarn make

# Publish e.g. to GitHub
yarn publish
```

## Release

## Cheat Sheet

## Remarks - Electron with Create React App

> TL;DR - Don't use electron with CRA.

Usually when creating React app, we would use CRA to avoid touching the complex webpack configs. However when using election it may not be easy to do so.

- Electron does not provide native support for CRA
- By default, electron template uses electron-forge to manage the start/build process. To smoothly use electron-forge to run React app, it needs to directly read the webpack config, which is not available in CRA app.
- So if we want to run a React app with CRA + electron-forge, we need to either:
  - Run CRA dev server (e.g. localhost:3000), and let electron-forge points to the dev server url
  - Build with CRA first, then electron-forge reads from the build folder

## Procedures if you really want to do that

```bash
# Init project with CRA 
npx create-react-app . --template typescript

# Install electron-forge to run the app natively
yarn add --dev @electron-forge/cli
yarn electron-forge import

# Add a lot of customizations
# Refer to below references:
# https://reactjsexample.com/electron-forge-create-react-app-typescript-template/
# https://mmazzarolo.com/blog/2021-08-12-building-an-electron-application-using-create-react-app/
```
