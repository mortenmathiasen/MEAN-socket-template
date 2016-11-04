var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var exports = module.exports = {};

exports.commentSchema = new Schema({
    comment: String,
    date: { type: Date, default: Date.now }
});

exports.blogSchema = new Schema({
    title:  String,
    author: String,
    body:   String,
    comments: [ exports.commentSchema ],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs:  Number
    }
});
exports.Blog = mongoose.model('Blog',exports.blogSchema);
