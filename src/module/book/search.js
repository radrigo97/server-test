import Book from './Model';

export default function search(req, res) {
  Book.find()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() => {
      res.status(200).json('Search all error');
    });
}
