const mongoose = require('mongoose')

const produtosSchema = new mongoose.Schema({
    nome: {
        type: String,
        preço:number,
        required: number,
});
  