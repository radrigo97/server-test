import Book from './Model';

export default function updateById(req, res) {
  const reqIdBook = req.params.bookId;

  Book.findByIdAndUpdate(reqIdBook, req.body)
    .exec()
    .then(() => {
      res.status(200).json('Update');
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json('update error');
    });
}
