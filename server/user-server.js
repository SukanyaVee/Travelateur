module.exports = {
    create: (req, res,next) => {
        const dbInstance = req.app.get('db')
        dbInstance.create_user([req.body.firstName, req.body.lastName,req.body.city,req.body.country,req.body.username,req.body.password]).then(prod=> res.status(200).send()).catch(error=>{console.error(error);res.status(500).send(err)})
        },
    get: (req, res, next) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_user([req.params.id]).then(prod=> res.status(200).send(prod)).catch(error=>{console.error(error);res.status(500).send(err)})
        },
    update: (req, res, next) => {
        const dbInstance = req.app.get('db')
        dbInstance.update_user([req.params.id,req.query.desc]).then(prod=> res.status(200).send()).catch(error=>{console.error(error);res.status(500).send(err)})
        },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db')
        dbInstance.delete_user([req.params.id]).then(prod=> res.status(200).send()).catch(error=>{console.error(error);res.status(500).send(err)})
        }
}