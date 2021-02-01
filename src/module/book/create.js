import Book from './Model';
import Author from '../author/Model';
import mongoose from 'mongoose';

export default function create(req, res) {
  const _id = mongoose.Schema.ObjectId;
  const newBook = new Book({
    _id,
    name: req.body.name,
    author: req.body.author,
  });

  console.log(req.body.author)

  req.body.author.forEach((author) => {
    Author.findById(author)
      .exec()
      .then((doc) => {
        console.log(doc);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  newBook
    .save()
    .then(() => {
      res.status(200).json('created!');
    })
    .catch(() => {
      res.status(400).json('not created!');
    });
}
