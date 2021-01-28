import Base from './Model';

export default function create(req, res) {
  const newBase = new Base({
    title: req.body.title,
  });

  newBase
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
