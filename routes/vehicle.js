let VehicleModel = require('../models/vehicle.model');
let express = require('express');
let router = express.Router();

//Create request
router.post('/vehicles/add', (req,res) => {
    if(!req.body){
        return res.status(400).send('Request body is missing')
    }

    let model = new VehicleModel(req.body)
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

//Read location with id request
router.get('/vehicles/:id', (req,res)=>{
    if(!req.params.id){
        return res.sendStatus(400)
    }
    VehicleModel.findOne({
        'UniqueId':req.params.id
    })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.sendStatus(500)
        })
})

//Read all locations request
router.get('/vehicles', (req,res)=>{
    VehicleModel.find({})
        .then(doc => {
            res.json(doc)
            
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
    VehicleModel.findOneAndUpdate({
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
    VehicleModel.findOneAndRemove({
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