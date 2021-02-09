import Book from './Model';
import mongoose from 'mongoose';
import Author from '../author/Model';

export default async function create(req, res) {
  const _id = new mongoose.Types.ObjectId();
  const newBook = new Book({
    _id,
    name: req.body.name,
    author: req.body.author,
  });

  req.body.author.forEach((author) => {
    Author.findById(author)
      .exec()
      .then((doc) => {
        doc.books = [...doc.books, _id];
        doc.save().catch((e) => {
          throw new Error(e);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  newBook
    .save()
    .then(() => {
      res.status(200).json('create book');
    })
    .catch(() => {
      res.status(400).json('error create book');
    });
}
