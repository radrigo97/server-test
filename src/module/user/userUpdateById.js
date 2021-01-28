import User from './Model';

export default function userUpdateById(req, res) {
  const reqById = req.params.userId;

  User.updateOne({ _id: reqById }, req.body)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json('User update error');
    });
}
