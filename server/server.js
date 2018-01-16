const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session')
const user = require('./user-server');
const entry = require('./entry-server');
const bcrypt = require('bcrypt');
require('dotenv').config()

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db', dbInstance);
}).catch(err=>console.error(err))

const app=express(); 
app.use(bodyParser.json());
app.use(cors());

app.use(session({
    //when do we use key?
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
    // cookie: {maxAge = 10000000}
}))
app.use((req, res, next) => {
    if (!req.session.user){
        //redirect to login page
        res.redirect('/login')
    }
    next();
});


// -----------------USER-----------------
const userAPIurl = '/api/travelateur/users'

app.post(`${userAPIurl}/login`, user.get);
app.post(`${userAPIurl}/create`, user.create);
// app.put(`${userAPIurl}/:id`, user.update);  
// app.delete(`${userAPIurl}/:id`, user.delete);

// -----------------ENTRIES-----------------
const entryAPIurl = '/api/travelateur/entries'

app.get(`${entryAPIurl}?userid=:id`, entry.getAll);
app.get(`${entryAPIurl}/:id`, entry.getOne);
app.post(entryAPIurl, entry.create);
// app.put(`${entryAPIurl}/:id`, entry.update);
// app.delete(`${entryAPIurl}/:id`, entry.delete);


app.listen(process.env.SERVER_PORT, ()=>console.log('listening on port ' + process.env.SERVER_PORT));