const {Autor} = require('../models/autores.models');


module.exports.crearAutor = (req, res)=>{
    const {
        nombre_autor, frase} 
    = req.body;
    Autor.create({
        nombre_autor,
        frase
    })
    .then((Autor)=>{
        res.json(Autor)
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports.listaAutor = (req, res)=>{
    Autor.find({})
    .then((Autor)=>{
        res.json(Autor)
        
    }).catch((error)=>{
        console.log(error)
    })
};

module.exports.buscarAutor = (req, res) => {
    Autor.findOne({_id: req.params.id})
        .then(Autor => res.json(Autor))
        .catch(err => res.json(err))
}

module.exports.editarAutor = (req, res) => {
    Autor.findOneAndUpdate({_id: req.params.id}, req.body, 
        {new:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err))
}

module.exports.eliminarAutor = (req, res) => {
    Autor.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}