# Hello,

This project is basic demonstration of how to test your code with API on frontend and backend.

## Setup

Prerequisite: Node version should be >= **18.17.0**

- Clone the repo
- Insall the packages
  ```
  yarn install-packages
  ```
- Run server and react app
  ```
  yarn dev
  ```
- Run server side testing
  ```
  yarn test
  ```
- Run Client side testing
  ```
  cd do-select-react && yarn test
  ```

## API

In this project I have consume [Fake API](https://fakestoreapi.com/) on server side to send data on frontend using custom api end point.

There are two end points: 1. To fetch all the products 2. To fetch single product data

## Frontend

Frontend developed using NextJS. Here we are showing the list of all product getting from end point created on server.

## Test

- React Testing Library and Jest are being use for testing. To test apis we have created jest mock api with respective data on frontend.
- Jest is being use for testing on server side and use supertest to mock an api on server side
