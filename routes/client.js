let ClientModel = require('../models/client.model');
let express = require('express');
let router = express.Router();

//Create request
router.post('/clients/add', (req,res) => {
    if(!req.body){
        return res.status(400).send('Request body is missing')
    }

    let model = new ClientModel(req.body)
    model.save()
        .then(doc => {
            if(!doc || doc.length === 0){
                return res.sendStatus(500)
            }
            res.sendStatus(201)
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
});


router.get('/clients/:id', (req,res)=>{
    if(!req.params.id){
        return res.sendStatus(400)
    }
    ClientModel.findOne({
        'Unique Id':req.params.id
    })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.sendStatus(500)
        })
})

//Read all locations request
router.get('/locations', (req,res)=>{
    ClientModel.find({})
        .then(doc => {
            res.json(changeResponse(doc))
            
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//Update with id request
router.put('/locations/update/:id', (req,res) => {
    if(!req.params.id){
        return res.status(400).send('Missing URL parameter: id')
    }
    ClientModel.findOneAndUpdate({
        _id:req.params.id
    }, req.body, {
        new: true
    })
        .then(doc => {
            res.json(changeResponse(doc))
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//Delete with id request
router.delete('/locations/delete/:id', (req,res) => {
    if(!req.params.id){
        return res.status(400).send('Missing URL parameter: id')
    }
    ClientModel.findOneAndRemove({
        _id:req.params.id
    })
        .then(doc => {
            res.json(changeResponse(doc))
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;