const express = require('express');
const { json } = require('express');

const router = express.Router();

const mongoose = require('mongoose');

const Veiculo = require('../models/veiculos');

router.get('/', (req, res, next) => {
    Veiculo.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
    /*res.status(200).json({
        message: 'Handling GET request, used by /veiculos'
    })*/
});

router.post('/', (req, res, next) => {
    const veiculo = new Veiculo({
        _id: new mongoose.Types.ObjectId(),
        modelo: req.body.modelo,
        marca: req.body.marca,
        ano: req.body.ano,
        descricao: req.body.descricao,
        vendido: req.body.vendido
        //created: req.body.created,
        //updated: req.body.updated
    });
    veiculo
        .save()
        .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Handling POST request, used by /veiculos',
            createdVeiculo: result
        })})
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
        })});
});

router.get('/:veiculoId', (req, res, next) => {
    const id = req.params.veiculoId;
    Veiculo.findById(id).exec().then(doc => {
        console.log("From db", doc);
        //res.status(200).json(doc);
        if (doc){
            res.status(200).json(doc);
        }
        else{
            res.status(404).json({
                message: "No valid entry"
            });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err})
    });
});

router.patch('/:veiculoId', (req, res, next) => {
    const id = req.params.veiculoId;
    const updatedOps = {};
    for (const ops of req.body){
        updatedOps[ops.props] = ops.value;
    }
    Veiculo.update({
        _id: id
    }, {$set: updatedOps})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.put('/:veiculoId', (req, res, next) => {
    const id = req.params.veiculoId;
    const updatedOps = {};
    for (const ops of req.body){
        updatedOps[ops.props] = ops.value;
    }
    Veiculo.update({
        _id: id
    }, {$set: updatedOps})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.delete('/:veiculoId', (req, res, next) => {
    const id = req.params.veiculoId;
    Veiculo.remove({
        _id: id
    })
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
});

module.exports = router;