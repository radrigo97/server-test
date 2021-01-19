import express from 'express';
const app = express();
const PORT = 5000;

app.get('/', home);
app.get('/info', info);

function home(req, res) {
  res.send('Alex');
}

function info(req, res) {
  const a = 5;
  const b = Math.random();
  const c = a + b;
  res.send('info' + c);
}

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
