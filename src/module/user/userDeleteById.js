import User from './Model';

export default function userDeleteById(req, res) {
  const reqById = req.params.userId;
  User.deleteOne({ _id: reqById })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json('User delete error');
    });
}
