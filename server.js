const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const users = require('./routes/user'); 

const port = 5000
const mongo_uri = 'mongodb://localhost:27017/mvc-login'

mongoose.connect(mongo_uri, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
  .then(() => {
    console.log(`connecting to database: ${mongo_uri}`)
  })
  .catch(err => {
    console.log('Error while connecting to database')
    console.log('Terminating application...')
    process.exit()
  })

const app = express();
app.use(express.json());
app.use(passport.initialize());
require('./passport')(passport);

app.use('/api/users', users);
app.get('/', (req,res) =>{
  res.send('hello');
});

app.listen({ port }, () => {
  console.log(`Server is listeing to port http://localhost:${port}`)
})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));