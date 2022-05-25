const mongoose = require('mongoose');
//require('dotenv/config')

// CONNECT TO DATABASE 
mongoose.connect("mongodb://localhost/project_film")
    .then(() => console.log('connected to mongoDB...'))
    .catch(err =>console.log('could not connect to mongoDB', err.message))

// create a schema object


const clientSearchSchema = new mongoose.Schema({
    title : String,
    year  :Number,
    genres : [ String ],
      
});

// model the schema object 

//module.exports = mongoose.model('client_search', clientSearchSchema)


