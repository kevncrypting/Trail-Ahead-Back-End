# Trail Ahead API

This is a companion API to the [Trail Ahead](https://github.com/DQuaya/Trail-Ahead-Front-End) hiking application. It is built with [Express.js](https://expressjs.com/) and uses [Knex.js](http://knexjs.org/) as a query builder and [Bookshelf](https://bookshelfjs.org/) as an ORM to access a PostgreSQL database.

## Features

The API provides comprehensive functionality for managing hikes. As a signed-in user, you can create, read, update, and delete a planned hike. Outside of the authenticated routes, there are a select number of curated hikes that can be accessed.

- Each **Hike** has a `hikeLeader`.

## Running the App Locally

To run the app locally, you'll need Node.js, npm, and PostgreSQL installed on your machine.

### Clone the repository:

```bash
git clone git@github.com:kevncrypting/Trail-Ahead-Back-End.git
cd Trail-Ahead-Back-End
```

### Install the dependencies:

```bash
npm install
```

### Set up the database:

First, create a new PostgreSQL database. Then, update the `knexfile.js` file with your database configuration (the name of your database, your username, and your password).

Then, use the `knex` command line interface to:

1. create the necessary tables and 


```bash
npx knex migrate:latest
```
2. seed them with some initial data [optional]

```bash
npx knex seed:run
```

### Start the server:

```bash
npm start
```

The app should now be running on [http://localhost:3000](http://localhost:3000).

----

## API Documentation

The API can be accessed at the following endpoints:


| HTTP Method | Endpoint                 | Description                                      | Required JSON Body                           |
|-------------|--------------------------|--------------------------------------------------|----------------------------------------------|
| GET         | /hikes                   | Get all hikes                                    | N/A                                          |
| POST        | /hikes                   | Create a new hike                                | more details coming soon                     |
| GET         | /hikes/:id               | Get a specific hike by ID                        | N/A                                          |
| PUT         | /hikes/:id               | Update a specific hike by ID                     | ID                                           |
| DELETE      | /hikes/:id               | Delete a specific hike by ID                     | N/A                                          |
| GET         | /curated                 | Get all books in a specific library              | N/A                                          |


All `POST` and `PUT` requests must include a `Content-Type: application/json` header.

## Error Handling

In case of an error, the API will return a JSON response with a `message` property describing the error. For example:

```json
{
  "message": "There was an error"
}
```
