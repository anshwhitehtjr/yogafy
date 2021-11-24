const express = require('express');
const { connect } = require('mongoose');
const app = express();
const port = 5000;
const connectToMongo = require('./db')

app.use(express.json());

app.use('/api/auth', require('./routes/auth'))
// app.use('/api/classes', require('./routes/classes'))

// listening the app
app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`);
});

connectToMongo()
