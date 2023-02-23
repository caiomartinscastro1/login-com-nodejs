const express = require('express');
const app = express();
const {engine} = require('express-handlebars');
const routes = require('./routes');
const conn = require('./db/conn');

conn.sync();

app.use(express.urlencoded(
    {
        extended: true,
    },
));

app.use(express.json());

app.engine('handlebars' , engine(
    {
        defaultLayout: 'main',
    },
));

app.set('view engine' , 'handlebars');

app.use(routes);


app.listen(3000 , () => {
    console.log('Server on port: 3000');
});