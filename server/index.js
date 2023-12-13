// const {MongoClient} = require("mongodb");
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const userRoute = require("./routes/userController");
const connectDB = require("./db/connect");
const port = 5000

app.use(morgan('tiny'))
app.use(express.json())
app.use(cors())

app.use(express.urlencoded({ extended:false }));

app.get('/', (req,res)=>{
    res.send('Server is working')
})

app.use('/users', userRoute);

const initServer = async () => {
  //first thing we want it to do is connect to the server
  try {
    await connectDB('mongodb+srv://dummyUser:Bg5Fmc0nCsR4YM7t@georgiecluster.qjq92r5.mongodb.net/Personal');
    app.listen(port, () => {
      //server listen
      console.log('Server is listening on Port 5000');
    });
  } catch (error) {
    console.log(error);
  }
};

initServer();