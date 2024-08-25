const mongoose = require('mongoose')

const post = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:[true,"Title is required"],
        minLength:[4,"Title must we atleast 4 characters long"]
    },
    media:{
        type:String,
        required:[true, "Media is required"]
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "user" 
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
}, { timestamps: true })

const Post = mongoose.model("post", post);

module.exports = Post;