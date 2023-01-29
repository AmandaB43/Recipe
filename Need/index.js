require('dotenv').config()

const express = require('express')
const app = express()

//GET Requests
app.get('/', function (req, res) {
   
    res.send(`
    <body>
    <h1>Hello world</h1>
    </body>
    `)
})
app.get('/Recipes', function (req, res) {
   
    res.send('Hello world')
})
app.get('/Reviews', function (req, res) {
   
    res.send('Hello world')
})
app.get('/About', function (req, res) {
   
    res.send('Hello world')
})

// Listen for connections.
app.listen(process.env.PORT)
