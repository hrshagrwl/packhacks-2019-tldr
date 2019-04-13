const express = require('express')
const bodyParser = require('body-parser')
const async = require('async')
const Google_api = require('./app/models/google_api')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// router = require('./router')
// router.route(app);

const port = 8000;

app.listen(port, () => {
  console.log("App is listening on port : ", port);
  Google_api.upload_file();
});

module.exports = app