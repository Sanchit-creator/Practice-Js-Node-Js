const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const Connection = require('./models/connection');
const db = require('./config/mongoose');

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// app.use('/', require('./routes'));
// it is also called middleware, which have access to your res and req
app.use(express.urlencoded());
// for css and other assets define path here for assets and give just write /css/style.css in the href of design page
app.use(express.static('./assests'));




// fetching from db
app.get('/', function(req, res) {

    Connection.find({}, function(err, todolist) {
        if (err) {
            console.log('Error fetching contact');
            return;
        }

        return res.render('home', {
        title: "To Do List",
        todoList: todolist,
    })
    })
});

// use express router

app.post('/createtodo', function(req, res) {
    
    Connection.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date,
    },
    function(err, newConnection) {
        if(err) {
            console.log('error in creating connection');
            return;
        }

        console.log('**********', newConnection);
        return res.redirect('back');
    }
    
    )
})


// Delete Multiple Items
app.post('/delete-list', function(req, res) {
    Object.keys(req.body).forEach(function(key) {
        Connection.findByIdAndDelete(key, function(err) {
            if (err) {
                console.log('Error in deleting an item from database', err);
                return;
            }
            console.log('Item deleted');
        })
    });
    return res.redirect('back');
})

app.listen(port, function(err) {
    if (err) {
        console.log(`Error is running in the server: ${err}`);
    }
    console.log(`Server running successfully at: ${port}`);
})