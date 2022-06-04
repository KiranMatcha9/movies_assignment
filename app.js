require('dotenv').config();
const connectDB = require('./db/connect');
const Movies = require('./models/movie');
const sample = require('./movie-data-raw.json');
const movieRouter = require('./routes/movieRoute');
const authenication = require('./middleware/authentication');
const express = require('express');
const app = express();

// Home Page
app.get('/',(req,res) => {
    res.send('Home');
})

//Routes
app.use('/api/v1/movie',authenication,movieRouter);

const PORT = process.env.PORT || 3000;
const start = async () => {
    try {
        //Database connection
        await connectDB(process.env.MONGO_URL);

        //Inserting movies json data to DB 
        await Movies.deleteMany();
        await Movies.create(sample);
        console.log('Database connected');

        app.listen(PORT,() => console.log(`Server is listening to the port ${PORT} with url http://localhost:${PORT} and url to get movies http://localhost:${PORT}/api/v1/movie `));
    } catch (error) {
        console.log(error);
    }
}

start();