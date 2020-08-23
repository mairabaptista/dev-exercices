const mongoose = require('mongoose');

const veiculoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    modelo: String,
    marca: String,
    ano: Number,
    descricao: String,
    vendido: Boolean
    //created: Date,
    //updated: Date
});

module.exports = mongoose.model('Veiculo', veiculoSchema);