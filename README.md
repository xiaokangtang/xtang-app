# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## App Intro

This app is composed of a search container, which contains a input area and performs searching function, and a result area which displays search results & error message when there's an error. Here are a couple of tools used:

### `use-debounce`

A light weight tool for debouncing input.

### `axios-hooks`

A react hook that makes axios calls with cleaner syntax (and many more interesting functionalities such as refetch)

### `react-error-boundary`

Error handling for error prone components such as `DataContainer`
