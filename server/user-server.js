module.exports = {
    create: (req, res,next) => {
        const dbInstance = req.app.get('db')
        bcrypt.hash(req.body.password, saltRounds).then(hashedPassword => {
            dbInstance.create_user([req.body.user.firstName, req.body.user.lastName,req.body.user.city,req.body.user.country,req.body.user.email,hashedPassword]).then(user=> {
                req.session.user={
                    firstName: user.name, 
                    lastName: user.email, 
                    email: user.email, 
                    password: user.password,
                    city: user.city,
                    country: user.country
                };
            res.json({user: req.session.user});
        }).res.status(200).send().catch(error=>{console.error(error);res.status(500).send(err)})
        })
    },
    get: (req, res, next) => {
        const dbInstance = req.app.get('db')
        bcrypt.hash(req.body.password, saltRounds).then(hashedPassword => {
            dbInstance.get_user([req.body.user.email,hashedPassword]).then(user=> {
                req.session.user={
                    firstName: user.name, 
                    lastName: user.email, 
                    email: user.email, 
                    password: user.password,
                    city: user.city,
                    country: user.country
                };
            res.json({user: req.session.user});
        }).res.status(200).send().catch(error=>{console.error(error);res.status(500).send(err)})
        })        
    },
    update: (req, res, next) => {
        const dbInstance = req.app.get('db')
        dbInstance.update_user([req.params.id,req.body.desc]).then(user=> res.status(200).send()).catch(error=>{console.error(error);res.status(500).send(err)})
        },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db')
        dbInstance.delete_user([req.params.id]).then(user=> res.status(200).send()).catch(error=>{console.error(error);res.status(500).send(err)})
        }
}