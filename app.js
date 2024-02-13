const express = require("express");
const tasks = require("./routes/tasks");
const app = express();
const connectDB = require("./db/connect")
const notFound = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")
require('dotenv').config();

const port = process.env.PORT || 3000;

// middleware
// app.use(express.static("./public"))
app.use(express.json());
// routes

app.use('/api/v1/tasks', tasks);
app.use(notFound); // this will return not found route if we type some url which do not exist
app.use(errorHandlerMiddleware);


const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server is listening ${port}`));
    }
    catch(error){
        console.log(error);
    }
}
start()

