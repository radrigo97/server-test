import Book from './Model';

export default function updateById(req, res) {
  const reqById = req.params.bookId;

  Book.updateOne({ _id: reqById }, req.body)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json('update error');
    });
}
