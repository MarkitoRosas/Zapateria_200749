const {Router}=require('express');
const productosController=require('../controllers/productos.controller');

const router=Router();
router.get('/',productosController.obtenerProductos); 
router.get('/:cb',productosController.obtenerProducto);
router.post('/insert',productosController.insertarProducto);
router.put('/actualizar/:cb',productosController.actualizarProducto);
router.delete('/borrar/:cb',productosController.eliminarProducto);
module.exports=router; 