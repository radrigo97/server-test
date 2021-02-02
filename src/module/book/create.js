import Book from './Model';
import Author from '../author/Model';
import mongoose from 'mongoose';

//1 - create Book and add Author Book
export default function create(req, res) {
  const _id = mongoose.Schema.ObjectId;
  const newBook = new Book({
    _id,
    name: req.body.name,
    author: req.body.author,
  });
  console.log(req.body.author);

  //2 - update authorBook
  req.body.author.forEach((author) => {
    Author.findById(author)
      .exec()
      .then((doc) => {
        doc.books = [_id];
        // res.status(200).json(result);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json('update error');
      });
  });

  newBook
    .save()
    .then(() => {
      res.status(200).json('Create');
    })
    .catch(() => {
      res.status(400).json('Error create');
    });
}
