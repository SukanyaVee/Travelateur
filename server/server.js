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

// USING SESSION CHECK WITH EVERY AXIOS REQUEST (as top level middleware) IS PROBLEMATIC AS IT WOULD HAVE TO BE SATISFIED EVEN BEFORE USER LOGS IN AND SESSION IS SET
// app.use((req, res, next) => {
//     if (!req.session.user){
//         //redirect to login page

//         res.redirect('/login')
//     }
//     next();
// });


// -----------------USER-----------------
const userAPIurl = '/api/travelateur/users'

app.get(userAPIurl, user.sessionCheck); //works - front & back
app.post(`${userAPIurl}/login`, user.get); //works - front & back
app.post(`${userAPIurl}/create`, user.create); //works - front & back
app.put(`${userAPIurl}/:id`, user.update);  
app.delete(`${userAPIurl}/logout`, user.logout);

// -----------------ENTRIES-----------------
const entryAPIurl = '/api/travelateur/entries'

app.get(`${entryAPIurl}/get`, entry.getAll); //works - backend only
// app.get(`${entryAPIurl}/:id`, entry.getOne);
app.post(entryAPIurl, entry.create); //works - backend only
app.put(`${entryAPIurl}/:eid`, entry.update); // works - backend only
// app.delete(`${entryAPIurl}/:id`, entry.delete);


app.listen(process.env.SERVER_PORT, ()=>console.log('listening on port ' + process.env.SERVER_PORT));