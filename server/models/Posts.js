const {Schema, model} = require('mongoose');
const Comments = require('./Comments');

const postSchema = new Schema(
    {
        postText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            //date
            type: Date,
            default: Date.now,
            //set default to current timestamp
            //getter method to format timestamp on query
        },
        username: {
            type: String,
        },
    },
    {
        toJSON: {
          virtuals: true,
        },
    }
)

const Posts = model('post', postSchema);

module.exports = Posts