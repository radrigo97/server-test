import User from './Model';

export default function userDeleteAll(req, res) {
  User.deleteMany()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json('User delete error');
    });
}
