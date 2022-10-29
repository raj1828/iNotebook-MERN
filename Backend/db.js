const  mongoose = require("mongoose");
const mongoURI = "mongodb+srv://raj:raj1828@cluster0.3eszvnf.mongodb.net/test";


 const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=> {
        console.log("Connect To mongo Successfully")
    })
 }

 module.exports = connectToMongo;


