const express = require('express');
const app = express();
const { router } = require('./routes/characters');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(bodyParser.json());
app.use(cors());
app.use("/", router);


//Connect to DB

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>  
    console.log('Conected to DB!')
); 


//How to we Start listening to the server
const port = process.env.port || 80;
app.listen(port, () => console.log(`El cielo Resplancede a mi Alrededor ♫♫♫ ${port}...`));

