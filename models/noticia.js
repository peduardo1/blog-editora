const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoticiaSchema = new Schema({
    autor:{
        type: String,
        required: [true, "Nome do Autor é obrigatório"]
    },
    titulo:{
        type: String,
        required: [true, "Título da Notícia é obrigatório"]
    },
    conteudo:{
        type: String
    },
    dataPublicacao:{
        type: Date
    }
});

const Noticia = mongoose.model('noticia', NoticiaSchema);
module.exports = Noticia;