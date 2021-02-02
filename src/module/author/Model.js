import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Model = new Schema({
  name: {
    type: String,
    required: true,
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
      required: false,
    },
  ],
});

export default mongoose.model('Author', Model);
