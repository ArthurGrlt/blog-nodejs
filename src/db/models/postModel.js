const { model } = require("mongoose");
const postSchema = require("../migrations/postSchema").add;

const Post = model("Post", postSchema);

module.exports = Post;
