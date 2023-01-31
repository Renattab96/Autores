const controllerAutor = require('../controllers/autores.controllers');

module.exports = (app) => {
  app.post('/api/crear/Autor',controllerAutor.crearAutor);
  app.get('/api/Autors',controllerAutor.listaAutor);
  app.put('/api/Autor/edicion/:id',controllerAutor.editarAutor);
  app.get('/api/Autor/filtrar/:id',controllerAutor.buscarAutor);
  app.delete('/api/Autor/borrar/:id', controllerAutor.eliminarAutor);
  
}