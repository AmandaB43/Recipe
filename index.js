require('dotenv').config()
const express = require('express')
const app = express()
app.use('/recipes', require('./controllers/recipes'))


//GET METHOD:

//home page
app.get('/', function (req, res) {
   
    res.send('<h1>Home Page</h1>')
})
//recipes page
app.get('/Recipes', function (req, res) {
   
    res.send('<h1>Recipes</h1>')
})
//reviews page
app.get('/Reviews', function (req, res) {
   
    res.send('<h1>Reviews</h1>')
})
//about page
app.get('/About', function (req, res) {
   
    res.send('<h1>About Us</h1>')
})
//error page
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})


// Listen for connections.
app.listen(process.env.PORT)
