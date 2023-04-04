import mongoose from 'mongoose';

// each post is going to have this things
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags:[String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// The above is the schme. Below we turn it to a model so we can create, query, update, delete records
const PostMessage = mongoose.model('PostMessage', postSchema);

// We are exporting a mongoose model from the postMessage file and on this model later we will be able to run commands
// such as find, create, delete and update
export default PostMessage;