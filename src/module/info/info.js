export default function info(req, res) {
  const a = req.body.j;
  const b = req.body.z;
  const sum = a + b;
  res.send('info here!' + sum);
}
