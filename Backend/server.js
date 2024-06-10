const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const sequelize = require('sequelize');
const mysql = require('mysql');
const app = express();
const port = 3000;
var jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:4200'
}));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static("public"));

const upload = multer({ dest: './public/images' });

/****************************************************************/

const apiRouters = require('./routers/api');
app.use('/api', apiRouters);

/****************************************************************/

app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`);
})
