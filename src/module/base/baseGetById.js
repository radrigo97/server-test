import Base from './Model';

export default function baseGetById(req, res) {
  const reqById = req.params.baseId;
  Base.findById({ _id: reqById })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() => {
      res.status(200).json('Search id error');
    });
}
