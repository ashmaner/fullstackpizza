const mongoose = require('mongoose')
require('colors')

const connectDB = async () => {
  try {
    const url =
      process.env.MONGO_URI ||
      'mongodb+srv://ashish:LqLImIj4en6FvAi7@cluster0.r9ti3fo.mongodb.net/?retryWrites=true&w=majority'
    const conn = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log(
      `Mongodb DataBase Connected! ${conn.connection.host}`.bgCyan.white,
    )
  } catch (error) {
    console.log(`error: ${error.message}`.bgRed.white)
  }
}

module.exports = connectDB
