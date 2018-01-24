module.exports = {
    create:(req, res,next) => {
        console.log('req.body', req.body)
        const dbInstance = req.app.get('db')
        dbInstance.create_entry([req.body.title, req.body.type,req.body.image,req.body.journal, req.body.location,req.body.year,req.body.uid]).then(entry=> {
            res.status(200).send(entry)
            console.log('entry', entry)
        }).catch(error=>{console.error(error);res.status(500).send(error)})
        },
    getOne:(req, res, next) => {
        const dbInstance = req.app.get('db')
        console.log('req.params', req.params.eid)
        dbInstance.get_entry([req.params.eid]).then(entry=> res.status(200).send(entry[0])).catch(error=>{console.error(error);res.status(500).send(err)})
        },
    getAll:(req, res, next) => {
        console.log('getAll uid',req.query.uid)
        const dbInstance = req.app.get('db') 
        dbInstance.get_entries([req.query.uid]).then(entry=> res.status(200).send(entry)).catch(error=>{console.error(error);res.status(500).send(err)})
        },
    update:(req, res, next) => {
        const dbInstance = req.app.get('db')
        dbInstance.update_entry([req.params.eid,req.body.title,req.body.type,req.body.image,req.body.location,req.body.year]).then(entry=> res.status(200).send()).catch(error=>{console.error(error);res.status(500).send(err)})
        },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db')
        console.log('entry delete eid',req.params.eid)
        dbInstance.delete_entry([req.params.eid]).then(resp=> res.status(200).send(resp)).catch(error=>{console.error(error);res.status(500).send(err)})
        }
}