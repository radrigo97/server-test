import Author from './Model';

export default function create(req, res) {
  const newAuthor = new Author({
    name: req.body.name,
    book: req.body.book,
  });

  newAuthor
    .save()
    .then(() => {
      res.status(200).json('created!');
    })
    .catch(() => {
      res.status(400).json('not created!');
    });
}
