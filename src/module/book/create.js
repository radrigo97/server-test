import Book from './Model';
import Author from '../author/Model';
import mongoose from 'mongoose';

//1 - create Book and add Author Book
export default function create(req, res) {
  const _id = new mongoose.Types.ObjectId();
  const newBook = new Book({
    _id,
    name: req.body.name,
    author: req.body.author,
  });

  // const idAuthor = req.body.author;
  // console.log(idAuthor);

  //2 - update authorBook
  req.body.author.forEach((author) => {
    Author.findById(author)
      .exec()
      .then((doc) => {
        doc.books = [...doc.books, _id];
        doc.save().catch((e) => {
          throw new Error(e);
        });
        // res.status(200).json(result);
      })
      .catch((error) => {
        console.log(error);
        // res.status(400).json('update error');
      });
  });

  req.body.author.forEach((author) => {
    Author.findById(author)
      .exec()
      .then((doc) => {
        const update = doc.map((el) => {
          if (el.length === Book.author) {
            update.push(newBook);
          } else {
            return el;
          }
        });
      })
      .catch();
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
