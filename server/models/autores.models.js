const mongoose = require ('mongoose');

const autorSchema =  mongoose.Schema({

    nombre_autor : {
        type: String,
        required: [true, 'Debe ingresar el nombre del autor'],
        minlength: [3, 'El nombre del autor no puede tener menos de 3 caracteres'],
        maxlength: [50, 'El nombre del autor no puede tener más de 50 caracteres']
    }, frase : {
        type: String,
        required: [true, 'Debe ingresar frase '],
        minlength: [3, 'El nombre del autor no puede tener menos de 3 caracteres'],
        maxlength: [50, 'El nombre del autor no puede tener más de 50 caracteres']
    },
   
   
}, { timestamps: true });



module.exports.Autor = mongoose.model('Autor', autorSchema);