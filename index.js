const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
require('dotenv').config()

const app = express();

app.use(json());

massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance)
})  .catch( err => console.log(err) );

app.get('/api/products', products_controller.getAll);
app.get('/api/products/:id', products_controller.getOne);
app.put('/api/products/:id?desc=...', products_controller.update);
app.post('/api/products', products_controller.create);
app.delete('/api/products/:id', products_controller.delete);


const port = process.env.PORT || 3003;

port.listen(port, () => {console.log(`Server is listening on port: ${port}.`); } );