const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path =require('path');
const connectDB = require('./server/DB/connection')

const app = express();
dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080;
//parse req to body parser
app.use(bodyParser.urlencoded({extended:true}))

//logs every http req on console
app.use(morgan('tiny'))

//MongoDb Connection
connectDB();

//load Routers
app.use('/',require('./server/routes/router'))



app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assests/img")))
app.use('/js',express.static(path.resolve(__dirname,"assests/js")))

//set view engine to generate dynamic web page
app.set("view engine","ejs")

//if you store view file somw where else use this line
//app.set("views".path.resolve(__dirname,"views/ejs"))




app.listen(PORT,()=>{
    console.log("Server Started http://localhost:%d",PORT);
})


