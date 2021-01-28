import Base from './Model';

export default function baseDeleteAll(req, res) {
  Base.deleteMany()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() => {
      res.status(400).json('Base delete error');
    });
}
