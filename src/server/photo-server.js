module.exports = {
    create:(req, res,next) => {
        const dbInstance = req.app.get('db')
        dbInstance.create_product([req.body.name, req.body.description,req.body.price,req.body.imageurl]).then(prod=> res.status(200).send()).catch(error=>{console.error(error);res.status(500).send(err)})
        },
    getOne:(req, res, next) => {
        const dbInstance = req.app.get('db')
        dbInstance.read_product([req.params.id]).then(prod=> res.status(200).send(prod)).catch(error=>{console.error(error);res.status(500).send(err)})
        },
    getAll:(req, res, next) => {
        const dbInstance = req.app.get('db')
        dbInstance.read_products().then(prod=> res.status(200).send(prod)).catch(error=>{console.error(error);res.status(500).send(err)})
        },
    update:(req, res, next) => {
        const dbInstance = req.app.get('db')
        dbInstance.update_product([req.params.id,req.query.desc]).then(prod=> res.status(200).send()).catch(error=>{console.error(error);res.status(500).send(err)})
        },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db')
        dbInstance.delete_product([req.params.id]).then(prod=> res.status(200).send()).catch(error=>{console.error(error);res.status(500).send(err)})
        }
}