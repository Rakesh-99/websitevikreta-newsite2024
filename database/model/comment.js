import mongoose from "mongoose";


//Comment Schema : 

const commentSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, 'Username is required!']
    },
    email: {
        type: String,
        required: [true, 'Email address is required!'],
    },
    commentbox: {
        type: String,
        required: [true, 'Comment is required!']
    },
    isCommentVisible: {
        type: Boolean,
        default: true
    },
    // contact: {
    //     type: String,
    //     required: [true, 'Contact is required!']
    // },
    blogId: {
        type: String,
        required: [true, 'Blog id is required!'],
    },
    commentReplies: [
        {
            username: {
                type: String,
                default: 'Admin'
            },
            comment: {
                required: true,
                type: String
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    likes: {
        type: Array,
        default: []
    },
    noOfLikes: {
        type: Number,
        default: 0
    }
}, { timestamps: true });


const commentModel = mongoose.models.Comment || mongoose.model('Comment', commentSchema);
export default commentModel;