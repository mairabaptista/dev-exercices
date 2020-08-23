const express = require('express');
const { json } = require('express');

const router = express.Router();

const mongoose = require('mongoose');

const Veiculo = require('../models/veiculos');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request, used by /veiculos'
    })
});

router.post('/', (req, res, next) => {
    const veiculo = new Veiculo({
        _id: new mongoose.Types.ObjectId(),
        modelo: req.body.modelo,
        marca: req.body.marca,
        ano: req.body.ano,
        descricao: req.body.descricao,
        vendido: req.body.vendido,
        created: req.body.created,
        updated: req.body.updated
    });
    veiculo.save().then(result => {
        console.log(result);
    }).catch(err => console.log(err));
    res.status(201).json({
        message: 'Handling POST request, used by /veiculos',
        createdVeiculo: veiculo
    });
});

router.get('/:veiculoId', (req, res, next) => {
    const id = req.params.veiculoId;
    if(id === 'special'){
        res.status(200).json({
            message: 'You discovered',
            id: id
        });
    }
    else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:veiculoId', (req, res, next) => {
    res.status(200).json({
        message: "updated product"
    });
});

router.put('/:veiculoId', (req, res, next) => {
    res.status(200).json({
        message: "updated product"
    });
});

router.delete('/:veiculoId', (req, res, next) => {
    res.status(200).json({
        message: "deleted product"
    });
});

module.exports = router;