const express = require('express');
const ejs = require('ejs');


// setting up the app 
const app = express();
// setting the view engine to EJS
app.set('view engine', 'ejs');
// To serve Static files
app.use(express.static(__dirname + "/public"));





app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/gallery', (req, res) => {
    res.render('gallery')
})





// Listening on port 3000!
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Listening on port 3000!');
});