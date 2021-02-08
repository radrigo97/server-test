import Author from './Model';
import Book from '../book/Model';

export default async function update(req, res) {
  const bookId = req.params.bookId;
  const authorId = req.body.author;
  const newAuthorList = [];

  const updateAuthor = authorId.map((author) =>
    Author.findByIdAndUpdate(author, { $addToSet: { books: bookId } })
      .exec()
      .then((result) => {
        if (result) {
          newAuthorList.push(author);
        } else {
          console.log(`error ${author} not add list`);
        }
      })
      .catch((error) => {
        console.log('update error list', error);
      })
  );

  await Promise.all(updateAuthor);

  const updatedBook = {
    name: req.body.name,
    author: newAuthorList,
  };

  Book.updateOne({ _id: bookId }, updatedBook)
    .exec()
    .then(() => {
      res.status(200).json('book update author');
    })
    .catch(() => {
      res.status(400).json('error book update author');
    });
}
