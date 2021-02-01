import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Model = new Schema({
  name: {
    type: String,
    required: false,
  },
  books: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Book',
      required: false,
    },
  ],
});

export default mongoose.model('Author', Model);
