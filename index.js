const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3456

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log(req.body);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
