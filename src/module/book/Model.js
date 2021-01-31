import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Model = new Schema({
  title: {
    type: String,
    required: false,
  },
  author: [
    {
      type: mongoose.Schema.ObjectId,
    },
  ],
});

export default mongoose.model('Book', Model);
