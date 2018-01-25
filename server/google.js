const axios = require('axios');
require('dotenv').config();

module.exports = {
    get: (req, res, next) => {
        axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?key=${process.env.REACT_APP_GOOGLE_KEY}&query=things+to+do+${req.params.country}&language=en`).then(resp=>{
            const x= resp.data.results.splice(0,5)
            console.log(x)
        res.status(200).json(x)
        }).catch(err=>{
            console.log('google error', err);res.status(500).send(err)
        })
        }
}