const express = require('express')
const app = express()

const PORT = process.env.PORT || 8000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
