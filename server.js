const express = require('express');
const app = express();
const port = process.env.PORT || 6744;

app.use(require('compression')());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended:true }));

app.use(require('express').static('build'));

app.get('/features', function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
})

app.listen(port, () => console.log(`Listening on port ${port}`));
