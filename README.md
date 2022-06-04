#### Project Setup

In order to spin up the project, in the root create .env with these two variables, with your own value for database connection.

MONGO_URL
JWT_SECRET=FSMovies2021

After that run this command

```bash
npm install && npm start
```

## Routes
http://localhost:3000/api/v1/movie (provide Bearer token for authentication)


