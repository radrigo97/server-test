import Book from './Model';
import mongoose from 'mongoose';

export default function updateById(req, res) {
  const _id = new mongoose.Types.ObjectId();
  const updateBook = new Book({
    _id,
    name: req.body.name,
    author: req.body.author,
  });

  updateBook
      .save()
      .then(())
      .catch()

}
