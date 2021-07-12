const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');

const port = 3001
const cors = require('cors');
app.use(cors());
app.use(express.json());


app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/create', db.createUser)
app.put('/update', db.updateUser)
app.delete('/delete/:id', db.deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})