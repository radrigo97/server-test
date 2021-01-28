import Book from './Model';

export default function getById(req, res) {
  const reqById = req.params.bookId;
  Book.findById({ _id: reqById })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() => {
      res.status(200).json('Book search id error');
    });
}
