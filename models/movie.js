const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    backdrop:{
        type:String,
    },
    cast:{
        type:Array
    },
    classification: {
        type:String
    },
    director: {
        type:Array
    },
    genres: {
        type:Array
    },
    id:{
        type:String
    },
    imdb_rating:{
        type:Number
    },
    length:{
        type:String
    },
    overview:{
        type:String
    },
    poster:{
        type:String
    },
    released_on: { 
        type:String
    },
    slug:{
        type:String
    },
    title: {
        type:String
    }

})

module.exports = mongoose.model('Movies',movieSchema);
