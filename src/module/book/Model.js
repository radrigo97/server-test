import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Model = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: [{

    }],
  },
  { timestamps: {} }
);

export default mongoose.model('Book', Model);
