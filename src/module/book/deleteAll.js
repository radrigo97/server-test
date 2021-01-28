import Book from './Model';

export default function deleteAll(req, res) {
  Book.deleteMany()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() => {
      res.status(400).json('Book delete error');
    });
}
