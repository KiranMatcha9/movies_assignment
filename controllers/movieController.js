const Movies = require('../models/movie');

const getAllMovies = async (req,res) => {
  
    const moviesByGenre = await Movies.aggregate([
        [
            {
              '$unwind': {
                'path': '$genres'
              }
            },{
              '$group': {
                '_id': '$genres',
                movies: { $push: {director:"$director",imdb_rating:"$imdb_rating",length:"$length",poster:"$poster",title:"$title"} }
              }
            },{
                '$addFields':{
                    genres:"$_id"
                }
            },{
                '$project':{
                    _id:0
                }
            },{
              '$sort': { 
                genres : 1 
              } 
            }
          ]
      ])
    res.status(200).json(moviesByGenre);
}

module.exports = {getAllMovies};