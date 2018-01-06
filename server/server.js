const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const user = require('./user-server');
const entry = require('./entry-server');

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db', dbInstance);
}).catch(err=>console.error(err))

const app=express();
app.use(bodyParser.json());
app.use(cors());

const userAPIurl = '/api/travelateur/users'
const entryAPIurl = '/api/travelateur/entries'

app.get(userAPIurl, user.get);
app.post(userAPIurl, user.post);
app.put(`${userAPIurl}/:id`, user.update);
app.delete(`${userAPIurl}/:id`, user.delete);

app.get(photoAPIurl, entry.get);
app.post(photoAPIurl, entry.post);
app.put(`${photoAPIurl}/:id`, entry.update);
app.delete(`${photoAPIurl}/:id`, entry.delete);



const PORT=3000;
app.listen(PORT, ()=>console.log('listening on port ' + PORT));