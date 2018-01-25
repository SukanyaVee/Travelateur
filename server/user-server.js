const saltRounds=12;
const bcrypt = require('bcrypt');


module.exports = {
    create: (req, res,next) => {
        const dbInstance = req.app.get('db')
        bcrypt.hash(req.body.password, saltRounds).then(hashedPassword => {
            dbInstance.create_user([req.body.firstName, req.body.lastName,req.body.city,req.body.country,req.body.email,hashedPassword]).then(user=> {
                console.log(user[0])
                req.session.user={
                    uid: user[0].uid,
                    firstName: user[0].firstname, 
                    lastName: user[0].lastname, 
                    city: user[0].city,
                    country: user[0].country,
                    email: user[0].email, 
                    password: user[0].password,
                    pic: user[0].pic
                };
                console.log('req.session', req.session.user)
                res.status(200).json({user: req.session.user}); 
            }).catch(error=>{
            console.error(error);
            res.status(500).send(error)
            })
        })
    },
    get: (req, res, next) => {
        const dbInstance = req.app.get('db')
        console.log(req.body)
            dbInstance.get_user([req.body.email]).then(user=> {
                console.log('user retrieved', user)
                bcrypt.compare(req.body.password, user[0].password).then(passwordsMatch => {
                    console.log('user inside bcrypt', passwordsMatch)

                    if (passwordsMatch) {
                        req.session.user={
                            uid: user[0].uid,
                            firstName: user[0].firstname, 
                            lastName: user[0].lastname, 
                            email: user[0].email, 
                            password: user[0].password,
                            city: user[0].city,
                            country: user[0].country,
                            pic: user[0].pic
                        }}
                    else {
                        res.status(403).json({ message: 'Invalid password' });
                    }
                console.log('req.session', req.session.user)
                res.status(200).json({user: req.session.user})
            }).catch(error=>{console.error(error);res.status(500).send('bcrypt error', error)})       
    }).catch(error=>{'db error',error})
    },
    update: (req, res, next) => {
        const dbInstance = req.app.get('db')
        console.log(req.body)
        bcrypt.hash(req.body.password, saltRounds).then(hashedPassword => {
            dbInstance.edit_user([req.params.id,req.body.firstName,req.body.lastName,req.body.city,req.body.country,req.body.email,hashedPassword,req.body.pic]).then(user=> {
                console.log(hashedPassword)
                req.session.user={
                    uid: user[0].uid,
                    firstName: user[0].firstname, 
                    lastName: user[0].lastname, 
                    city: user[0].city,
                    country: user[0].country,
                    email: user[0].email, 
                    password: user[0].password,
                    pic: user[0].pic
                }
                console.log('req.session', req.session.user)
                res.status(200).json({user: req.session.user});             
            }).catch(error=>{console.error(error);res.status(500).send(error)})
        })
    },
    connect: (req, res, next) => {
        console.log('connect country',req.query.country)
        const dbInstance = req.app.get('db') 
        dbInstance.connect([req.query.country]).then(entry=> {;res.status(200).send(entry)}).catch(error=>{console.error(error);res.status(500).send(err)})
    },
    sessionCheck: (req, res, next) => {
        req.session.user ? res.status(200).send(req.session.user) : res.status(500).send()
    },
    logout: (req, res, next) => {
        if (req.session.user)
        {
            console.log('before destroying', req.session)
            req.session.destroy();
            console.log('after destroying', req.session)
            res.status(200).send()  
        }     
    }
}