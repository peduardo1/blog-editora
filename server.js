const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const noticiaRouter = require('./routes/noticias');

const app = express();
const port = process.env.PORT || 4001;

require('dotenv').config(); //conectando o arquivo .env criado

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{
                useUnifiedTopology: true, 
                useNewUrlParser: true}
                );
const connection = mongoose.connection;
connection.once('open',
    () => console.log("MongoDB conectado"
));

app.use('/paulosantos/api/', noticiaRouter);

app.listen(port, () => console.log("API funcionando."));