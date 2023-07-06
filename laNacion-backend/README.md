# Development Challenge for Node.js

Challenge made by Tomas Manuel Perez.
REST API:
 - TypeScript
 - Node.js
 - Database: mySQL
 - Schema validations: Joi.

## REST API Documentation

This documentation provides information about the REST API. It includes details about the API endpoints, and any additional information developers need to work with the API.

## Run Project
Environment variables: 
 - DB_HOST=localhost by default
 - DB_USER=your_user
 - DB_PASSWORD=your_password
 - DB_NAME=name_of_database

Run locally:
 - npm install
 - npm run generate
 - npm run dev

## Base URL

The base URL for all API endpoints is: `localhost:PORT`. If the environment variable PORT is not defined, by default it will be implemented PORT = 3001

## Endpoints

### Products

#### GET
 - '/products' return a list of all products on database.
 - '/products/id' return the product that match whit the id.

#### POST
 - '/products' Create a new product. body: 
 ```
 {
  "sku": number,
  "product_name": string,
  "description": string,
  "price": number,
  "status_id": 1 | 2,
  "category_id": 1 | 2 | 3
 }
  ```

#### PUT
 - '/products/id' Update the id match actor. body:
```
 {
  "sku": number,
  "product_name": string,
  "description": string,
  "price": number,
  "status_id": 1 | 2,
  "category_id": 1 | 2 | 3
 }
```

#### DELETE
 - '/products/id' Delete the product.