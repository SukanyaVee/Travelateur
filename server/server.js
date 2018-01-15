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
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
    // cookie: {maxAge = 10000000}
}
))

const app=express();
app.use(bodyParser.json());
app.use(cors());

const userAPIurl = '/api/travelateur/users'
const entryAPIurl = '/api/travelateur/entries'

app.get(`${userAPIurl}/:id`, user.get);
app.post(userAPIurl, user.create);
app.put(`${userAPIurl}/:id`, user.update);  
app.delete(`${userAPIurl}/:id`, user.delete);

app.get(`${photoAPIurl}?userid=:id`, entry.getAll);
app.get(`${photoAPIurl}/:id`, entry.getOne);
app.post(photoAPIurl, entry.create);
// app.put(`${photoAPIurl}/:id`, entry.update);
// app.delete(`${photoAPIurl}/:id`, entry.delete);



const PORT=3000;
app.listen(PORT, ()=>console.log('listening on port ' + PORT));