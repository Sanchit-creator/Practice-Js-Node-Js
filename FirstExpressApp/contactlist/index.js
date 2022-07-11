const express = require('express');
const path = require('path');
const port = 8000;

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', function(req, res) {
    // res.send('<h1>Cool, it is running</h1>');
    return res.render('home', {title: "Contact Lists"})
});

app.get('/practice', function(req, res) {
    return res.render('practice', {
        title: "Let us paly Ejs"
    })
})

app.listen(port, function(err) {
    if (err) {
        console.log('Error in running server', err);
    }
    console.log('Server is running on:', port);
});