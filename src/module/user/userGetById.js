import User from './Model';

export default function userGetById(req, res) {
  const reqById = req.params.userId;
  User.findById(reqById)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json('User get error');
    });
}
