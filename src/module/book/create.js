import Book from './Model';
import Author from '../author/Model';
import mongoose from 'mongoose';

//1 - create Book and add Author Book
export default async function create(req, res) {
  const _id = new mongoose.Types.ObjectId();
  const authors = req.body.author;
  const newAuthorList = [];

  const updateAuthorList = authors.map((author) =>
    Author.findByIdAndUpdate(author, { $addToSet: { books: _id } })
      .exec()
      .then((result) => {
        if (result) {
          newAuthorList.push(author);
        } else {
          console.log('error update author list');
        }
      })
      .catch((err) => {
        console.log('error');
      })
  );

  await Promise.all(updateAuthorList);

  const newBook = new Book({
    _id: _id,
    name: req.body.name,
    author: newAuthorList,
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
