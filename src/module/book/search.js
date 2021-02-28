import Book from './Model';

export default function search(req, res) {
  Book.find()
    .populate({
      path: 'author',
      select: 'name',
    })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json('get all error');
    });
}
