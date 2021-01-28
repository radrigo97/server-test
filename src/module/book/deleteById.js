import Book from './Model';

export default function deleteById(req, res) {
  const reqById = req.params.bookId;
  Book.deleteOne({ _id: reqById }, req.body)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() => {
      res.status(200).json('Book delete id error');
    });
}
