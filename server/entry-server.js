module.exports = {
    create:(req, res,next) => {
        const dbInstance = req.app.get('db')
        dbInstance.create_entry([req.body.title, req.body.type,req.body.image,req.body.journal, req.body.location,req.body.year,req.body.userid]).then(prod=> res.status(200).send()).catch(error=>{console.error(error);res.status(500).send(err)})
        },
    getOne:(req, res, next) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_entry([req.params.id]).then(prod=> res.status(200).send(prod)).catch(error=>{console.error(error);res.status(500).send(err)})
        },
    getAll:(req, res, next) => {
        const dbInstance = req.app.get('db')
        dbInstance.read_entries([req.query.userid]).then(prod=> res.status(200).send(prod)).catch(error=>{console.error(error);res.status(500).send(err)})
        },
    // update:(req, res, next) => {
    //     const dbInstance = req.app.get('db')
    //     dbInstance.update_entry([req.params.id,req.query.desc]).then(prod=> res.status(200).send()).catch(error=>{console.error(error);res.status(500).send(err)})
    //     },
    // delete: (req, res, next) => {
    //     const dbInstance = req.app.get('db')
    //     dbInstance.delete_entry([req.params.id]).then(prod=> res.status(200).send()).catch(error=>{console.error(error);res.status(500).send(err)})
    //     }
}