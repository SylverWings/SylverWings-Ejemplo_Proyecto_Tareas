const mongoose = require("mongoose");

//connection to mongoDB
const db = () => mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connection stablished");
})
.catch((error)=>{
    console.log("Error connecting to MongoDB", error);
});

module.exports = db;