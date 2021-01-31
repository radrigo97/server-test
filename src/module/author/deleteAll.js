import Author from './Model';

export default function deleteAll(req, res) {
  Author.deleteMany()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json('delete error');
    });
}
