const mongoose = require('mongoose')
const mongooseURI = 'mongodb://localhost:27017/yogafy?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'

const connectToMongo = () => {
   mongoose.connect(mongooseURI, () => {
      console.log('Connected To Mongo Successfully');
   })
}

module.exports = connectToMongo
