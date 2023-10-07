const express = require('express');
const router = express.Router();
const controller = require('../Controller/task.controller');

router.post('/', controller.postTask);
router.get('/', controller.getFunction);
router.get('/:id', controller.getSingleFunction);
router.put('/:id', controller.updateFunction);
router.delete('/:id', controller.deleteFunction);

module.exports = router;
