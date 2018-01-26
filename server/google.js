const axios = require('axios');
require('dotenv').config();

module.exports = {
    reco: (req, res, next) => {
        axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?key=${process.env.REACT_APP_GOOGLE_KEY}&query=things+to+do+${req.params.country}&language=en`).then(resp=>{
            const x= resp.data.results.splice(0,5)
            console.log(x)
        res.status(200).json(x)
        }).catch(err=>{
            console.log('google error', err);res.status(500).send(err)
        })
        },
    latlong: (req, res, next) => {
        console.log('google latlong', req.body.latitude,req.body.longitude)
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.REACT_APP_GOOGLE_KEY}&latlng=${req.body.latitude},${req.body.longitude}&language=en`).then(resp=>{
            var x = resp.data.results.find(elem=>elem.address_components)
            console.log('resp.data.results ', x)
            res.status(200).send(x)
        }).catch(err=>{
            console.log('google error', err);res.status(500).send(err)
        })
    }
}