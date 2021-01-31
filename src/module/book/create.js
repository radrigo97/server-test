import Book from './Model';
import Author from './Model';

export default function create(req, res) {
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
  });

  req.body.author.forEach((author) => {
    Author.updateOne({ _id: author })
      .exec()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).json('update error');
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
