const express = require('express');
const ProductCtrl = require('../controllers/ProductController');

const Router = express.Router();

Router.get('/',ProductCtrl.index) // api.com/citas/ Index: Listar todas las citas
      .post('/',ProductCtrl.create)   // api.com/citas/ Create: Crear una nueva cita
      .get('/:key/:value',ProductCtrl.find,ProductCtrl.show)    // api.com/citas/category/Hogar Show: Muestra una cita en específico
      .put('/:key/:value',ProductCtrl.find,ProductCtrl.update)    // api.com/citas/name/SamsungGalaxy Update: Actualizar una cita en especifico
      .delete('/:key/:value',ProductCtrl.find,ProductCtrl.remove);// api.com/citas/name/SamsungGalaxy

module.exports = Router;