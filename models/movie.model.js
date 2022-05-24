/**
 * This file will represent the Movie Entity
 * 
 * name | description | casts | trailer URL | posterURL
 * 
 * language | release Date |releaseStatus
 */
const mongoose = require('mongoose');
const constants = require('../utils/constant')
const movieSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    cast : {  
        type : [String],
        required : true
    },
    director : {
        type : String,
        required : true
    },
    trailerUrls : {
        type : [String],
        required : true
    },
    posterUrls : {
        type : [String],
        required : true
    },
    language : {
        type : String,
        required : true,
        default : constants.movieLanguages.hindi,
        enum : [constants.movieLanguages.english,constants.movieLanguages.hindi,constants.movieLanguages.marathi,constants.movieLanguages.tamil,constants.movieLanguages.telgu]
    },
    releaseDate : {
        type : Date
    },
    releaseStatus : {
        type : String,
        required : true,
        default : constants.movieStatus.comingsoon,
        enum : [constants.movieStatus.cancled,constants.movieStatus.comingsoon,constants.movieStatus.released]
    },
    createdAt : {
        type : Date,
        default : () => {
            return Date.now();
        },
        immutable : true
    },
    updatedAt : {
        type : Date,
        default : () => {
            return Date.now();
        }
    },
    imdbRating : {  //Aggregate rating of the movie
        type : Number
        
    }

});

module.exports = mongoose.model("Movies",movieSchema);