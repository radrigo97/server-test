import Base from './Model';

export default function getById(req, res) {
  const reqById = req.params.baseId;
  Base.findById(reqById)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json('get error');
    });
}
