import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Model = new Schema({
  title: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.ObjectId,
  },
});


export default mongoose.model('Base', Model);
