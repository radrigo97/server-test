import Author from './Model';

export default function getAll(req, res) {
  Author.find()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json('get all error');
    });
}
