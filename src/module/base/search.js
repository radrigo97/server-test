import Base from './Model';

export default function search(req, res) {
  Base.find()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() => {
      res.status(200).json('Search all error');
    });
}
