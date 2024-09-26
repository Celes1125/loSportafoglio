var express = require('express');
var router = express.Router();
var pocketsController = require ('../controllers/pocketsController')


router.post('/', pocketsController.create);
router.get('/', pocketsController.getAll);
router.get('/:id', pocketsController.getById);
router.put('/:id', pocketsController.update);
router.delete('/:id', pocketsController.fisicDelete);
router.patch('/:id', pocketsController.logicDelete);
router.delete('/', pocketsController.fisicDeleteAll);



module.exports = router;