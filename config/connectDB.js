// import mongoose

const mongoose = require ("mongoose");

const connectDB = async ()=>{
    try {
        
      await  mongoose.connect("mongodb+srv://fatma:101288@cluster0.vaifu.mongodb.net/checkmongoose?retryWrites=true&w=majority");
      console.log("DB connected");
    } catch (error) {
        console.log(error);
    }
};
module.exports = connectDB;