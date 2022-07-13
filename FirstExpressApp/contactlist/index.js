const express = require('express');
const path = require('path');
const port = 8000;

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Step 2 Add parser which is a middleware
// it is also called middleware, which have access to your res and req
app.use(express.urlencoded());

// Static files like html css js
app.use(express.static('assets'));


//Practice middleware 1
// app.use(function(req, res, next) {
//     req.myName = "Arpan";
//     console.log('MiddleWare 1');
//     next();
// })

// Practice chaining middleware 2
// app.use(function(req, res, next) {
//     console.log('My name from MW2', req.myName);
//     console.log('middleware 2');
//     next();
// })

var contactList = [
    {
        name: "Sanchit",
        phone: "8888888888"
    },
    {
        name: "Batista",
        phone: "9999999999"
    },
    {
        name: "Cena",
        phone: "5555555555"
    }
]

app.get('/', function(req, res) {
    // console.log(req.myName);
    // res.send('<h1>Cool, it is running</h1>');
    return res.render('home', {
        title: "Contact Lists",
        contactlist: contactList
    })
});

app.get('/practice', function(req, res) {
    return res.render('practice', {
        title: "Let us paly Ejs"
    })
});

// Step 1 Create Controller

app.post('/createcontact', function(req, res) {

    // Step 3 we added parse data to our contact list

    contactList.push({
        name: req.body.name,
        phone: req.body.phone,
    })

    // you can write 
    // contactList.push(req.body);
    return res.redirect('/');
    // you can also write 
    // return res.redirect('back');




    // console.log(req.body);
    //It sees it s an object
    // console.log(req.body.name);
    // return res.redirect('/practice');
})

app.get('/delete-contact/', function(req, res) {
    // when query
    // get the query from url
    console.log(req.query);
    let phone = req.query.phone;

    let contactIndex = contactList.findIndex(contact => contact.phone == phone);

    if (contactIndex != -1) {
        contactList.splice(contactIndex, 1);
    }

    return res.redirect('back');

    // when params
    // console.log(req.params);
    // let phone = req.params.phone;
})

app.listen(port, function(err) {
    if (err) {
        console.log('Error in running server', err);
    }
    console.log('Server is running on:', port);
});