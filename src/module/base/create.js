import Base from './Model';

export default function create(req, res) {
  const newBase = new Base({
    email: req.body.email,
    password: req.body.password,
  });

  newBase
    .save()
    .then(() => {
      res.status(200).json('created!');
    })
    .catch(() => {
      res.status(400).json('not created!');
    });
}
