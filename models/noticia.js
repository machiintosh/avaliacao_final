const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoticiaSchema = new Schema({
  autor: { type: String },
  titulo: { type: String },
  desricao: { type: String },
  data_publicacao: { type: Date },
  conteudo: { type: String }
});

const Noticia = mongoose.model("noticias", NoticiaSchema);
module.exports = Noticia;