import Author from './Model';
import Book from '../book/Model';

export default async function update(req, res) {
  const bookId = req.params.bookId;
  const authorId = req.body.author;
  let updateAuthorBook = [];

  Book.findById(bookId)
    .exec()
    .then(async (doc) => {
      await authorId.map((author) => {
        if (!doc.author.includes(author)) {
          Author.findByIdAndUpdate(author, { $addToSet: { books: bookId } })
            .exec()
            .then((doc) => {
              if (doc) {
                updateAuthorBook.push(doc);
              } else {
                console.log('error update');
              }
            })
            .catch(() => {
              console.log('error add book in author');
            });
        } else {
          updateAuthorBook.push(author);
        }
        return null;
      });
    });

  console.log(updateAuthorBook);

  const updateBook = {
    author: updateAuthorBook,
  };

  Book.updateOne({ _id: bookId }, updateBook)
    .exec()
    .then(() => {
      console.log('Update Book complete');
    })
    .catch(() => {
      console.log('Update book error');
    });
}
