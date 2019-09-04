const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title : {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  content: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: String,
    required: true,
    trim: true
  },
  _postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

const Post = mongoose.model('Post', PostSchema);

export default {
  Post
};