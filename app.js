let express = require('express');
let app = express();
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let postSchema = new Schema({
  id: Number,
  title: String,
  date: Date,
  description: String,
  text: String,
  country: String,
  imageURL: String
});

app.use(express.static('public'));

app.listen(3000, () => console.log('Listening 3000....'));
