import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Model = new Schema({
  name: {
    type: String,
    required: false,
  },
  author: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Author',
      required: false,
    },
  ],
});

export default mongoose.model('Book', Model);
