import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Model = new Schema({
  title: {
    type: String,
    required: false,
  },
  books: [
    {
      type: mongoose.Schema.ObjectId,
      required: false,
    },
  ],
});

export default mongoose.model('Author', Model);
