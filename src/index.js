import express from 'express';
const app = express();
const PORT = 5000;

app.get('/', home);
app.get('/info', info);
app.use(apiNotFount);

function home(req, res) {
  res.send('Alex----');
}

function info(req, res) {
  const a = 5;
  const b = Math.random();
  const c = a + b;
  res.send('info' + c);
}

function apiNotFount(req, res) {
  res.status(400).json('API not found');
}

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
