const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const translate = require('google-translate-api');
const bodyParser = require('body-parser');

app
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, 'build')))
  .use(morgan('dev'));

app.post('/api/translate', function(req, res){
  const options = {};
  if (req.body.from)
    options.from = req.body.from;
  if (req.body.to)
    options.to = req.body.to;
  translate(req.body.text, options).then(result => {
      res.json({
        code: 200,
        data: result
      })
  }).catch(err => {
      res.json({
        code: 400,
        error: err
      })
  });
})

app.get(/^\/(?!api).*/, function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});





app.listen(process.env.PORT);