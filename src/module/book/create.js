import Book from './Model';

export default function create(req, res) {
  const newBook = new Book({

  })

  newBook
    .save()
    .then(() => {
      res.status(200).json('Book created!');
    })
    .catch(() => {
      res.status(400).json('Book not created!');
    })
    .finally(() => {
      console.log('END');
    });
}
