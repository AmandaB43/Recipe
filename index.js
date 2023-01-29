require('dotenv').config()
const express = require('express')
const app = express()
app.use('/recipes', require('./controllers/recipes'))


//GET METHOD:

//home page
app.get('/', function (req, res) {
   
    res.send(`
    <body>
    <h1>Hello world</h1>
    </body>
    `)
})
//recipes page
app.get('/Recipes', function (req, res) {
   
    res.send('Hello world')
})
//reviews page
app.get('/Reviews', function (req, res) {
   
    res.send('Hello world')
})
//about page
app.get('/About', function (req, res) {
   
    res.send('Hello world')
})
//error page
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})


// Listen for connections.
app.listen(process.env.PORT)
