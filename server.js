const express = require('express');
const cors = require('cors');
const dbConnection = require('./DB/db');
const userRouter = require('./route/userRoute');

const app = express();

//Middlewares

app.use(express.json());
app.use(cors());

//Routers
app.use(userRouter)

app.use('/',(req,res) => {
    res.send('Welocme To Node js server')
})

//Database connection
dbConnection();



//port where the server will run
const port = 5920;

app.listen(port,() => console.log(`app is listening on ${port}`))