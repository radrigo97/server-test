import User from './Model';

export default function create(req, res) {
  const newBase = new User({
    email: req.body.email,
    password: req.body.password,
  });

  newUser
    .save()
    .then(() => {
      res.status(200).json('User created!');
    })
    .catch(() => {
      res.status(400).json('User not created!');
    })
    .finally(() => {
      console.log('END');
    });
}

s
