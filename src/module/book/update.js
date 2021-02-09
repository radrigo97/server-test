import Author from './Model';
import Book from '../book/Model';

export default function update(req, res) {
  const bookId = req.params.bookId;
  const authorId = req.body.author;
  const updateAuthorBook = [];

  Book.findById(bookId)
    .exec()
    .then((doc) => {
      Author.updateOne(authorId)
        .exec()
        .then((doc) => {
          updateAuthorBook.push(doc);
        })
        .catch(() => {
          console.log('error');
        });
    })
    .catch(() => {
      console.log('update error');
    });

  const updateBook = {
    name: req.body.name,
    author: updateAuthorBook,
  };

  Book.updateOne({ _id: bookId }, updateBook)
    .exec()
    .then(() => {
      res.status(200).json('ok');
    })
    .catch(() => {
      res.status(400).json('erroring');
    });
}
