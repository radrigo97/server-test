let names = []
export default function info(req, res) {
  names.push(req.body.a)
  res.status(200).json(names)
}
