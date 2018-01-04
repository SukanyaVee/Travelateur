const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ctrl = require('./user.js')

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db', dbInstance);
}).catch(err=>console.error(err))

const app=express();
app.use(bodyParser.json());
app.use(cors());

const userAPIurl = '/api/travelateur/users'
const photoAPIurl = '/api/travelateur/photos'
const journalAPIurl = '/api/travelateur/journals'

app.get(userAPIurl, user.get);
app.post(userAPIurl, user.post);
app.put(`${userAPIurl}/:id`, user.update);
app.delete(`${userAPIurl}/:id`, user.delete);

app.get(photoAPIurl, photo.get);
app.post(photoAPIurl, photo.post);
app.put(`${photoAPIurl}/:id`, photo.update);
app.delete(`${photoAPIurl}/:id`, photo.delete);

app.get(journalAPIurl, journal.get);
app.post(journalAPIurl, journal.post);
app.put(`${journalAPIurl}/:id`, journal.update);
app.delete(`${journalAPIurl}/:id`, journal.delete);
    // cuse a control variable to link to function in controller file for 
    // (req,res)=>{
    // res.status(200).send('test')};

const PORT=3000;
app.listen(PORT, ()=>console.log('listening on port ' + PORT));