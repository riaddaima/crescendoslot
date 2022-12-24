const express = require('express');

const dependentRouter = express.Router();
const { getAllDependents, getDependentById, postNewDependent, updateDependentById, deleteDependentById } = require('../controller/dependent');
const { verify } = require('../middlewares/auth');

dependentRouter.get('/', verify, getAllDependents);
dependentRouter.get('/:id', verify, getDependentById);
dependentRouter.post('/', verify, postNewDependent);
dependentRouter.put('/:id', verify, updateDependentById);
dependentRouter.delete('/:id', verify, deleteDependentById);

module.exports = dependentRouter;