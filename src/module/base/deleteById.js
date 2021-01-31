import Base from './Model';

export default function deleteById(req, res) {
  const reqById = req.params.baseId;
  Base.deleteOne({ _id: reqById })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json('delete error');
    });
}
