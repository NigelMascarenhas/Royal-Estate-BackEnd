const mongoose = require('mongoose')    
const  Blogs = mongoose.Schema({
    Title : {
        type : String,
    },
    Subtitle:{
        type:String,
         
    },
    Description:{
        type:String,    
    },
    Image:{
        type:String

    },
    Video:{
        type:String
    },
    Content:{
        type:String
    }
})
module.exports =  mongoose.model( 'Blogs'  ,Blogs)