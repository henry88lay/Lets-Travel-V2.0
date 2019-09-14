let express = require('express');
let app = express();
let mongoose = require('mongoose');
let Post = require('./models/posts').Post;

mongoose.connect('mongodb://localhost/travels'), {useNewUrlParser: true};

let Post1 = new Post({
  id: 2,
  title: 'Statue of Liberty',
  date: new Date(),
  description: 'Some Description',
  text: 'some text',
  country: 'USA',
  imageURL: './images/1.jpg'
});

Post1.save();

app.use(express.static('public'));

app.listen(3000, () => console.log('Listening 3000....'));
