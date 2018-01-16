const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session')
const user = require('./user-server');
const entry = require('./entry-server');

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db', dbInstance);
}).catch(err=>console.error(err))

app.use(session({
    //when do we use key?
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
    // cookie: {maxAge = 10000000}
}
))
app.use((req, res, next) => {
    if (!req.session.user){
        //redirect to login page
        res.redirect('/login')
    }
    next();
});

const app=express(); 
app.use(bodyParser.json());
app.use(cors());

// -----------------USER-----------------
const userAPIurl = '/api/travelateur/users'

app.get(`${userAPIurl}/:id`, user.get);
app.post(userAPIurl, user.create);
app.put(`${userAPIurl}/:id`, user.update);  
app.delete(`${userAPIurl}/:id`, user.delete);

// -----------------ENTRIES-----------------
const entryAPIurl = '/api/travelateur/entries'

app.get(`${photoAPIurl}?userid=:id`, entry.getAll);
app.get(`${photoAPIurl}/:id`, entry.getOne);
app.post(photoAPIurl, entry.create);
// app.put(`${photoAPIurl}/:id`, entry.update);
// app.delete(`${photoAPIurl}/:id`, entry.delete);



const PORT=3000;
app.listen(PORT, ()=>console.log('listening on port ' + PORT));