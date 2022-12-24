const { createDependent, getDependent, updateDependent, deleteDependent, getDependents } = require('../services/dependent');

const getAllDependents = async (req, res) => {
  try {
    const { usr_id: userId } = req.user;
    let dependents = await getDependents(userId);
    dependents = dependents.map(dependent => {
      return {
        id: dependent.dep_id,
        fname: dependent.dep_fn,
        lname: dependent.dep_ln,
        dob: dependent.dep_dob,
        gender: dependent.dep_gender,
        age: Math.floor((new Date() - new Date(dependent.dep_dob).getTime()) / 3.15576e+10)
      }
    });
    res.status(200).json(dependents);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const getDependentById = async (req, res) => {
  try {
    const { id: dependentId } = req.params;
    const dependent = await getDependent(dependentId);
    if (dependent) {
      return res.status(200).json({ dependent });
    }
    res.status(404).send('Dependent with the specified ID does not exists');
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const postNewDependent = async (req, res) => {
  try {
    const { fname: dep_fn, lname: dep_ln, gender: dep_gender, dob: dep_dob } = req.body;
    const { usr_id: userId } = req.user;
    const createdDependent = await createDependent({ dep_fn, dep_ln, dep_gender, dep_dob }, userId);
    res.status(201).json({
      id: createdDependent.dep_id,
      fname: createdDependent.dep_fn,
      lname: createdDependent.dep_ln,
      dob: createdDependent.dep_dob,
      gender: createdDependent.dep_gender,
      age: Math.floor((new Date() - new Date(createdDependent.dep_dob).getTime()) / 3.15576e+10)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const updateDependentById = async (req, res) => {
  try {
    const { id: dep_id, fname: dep_fn, lname: dep_ln, gender: dep_gender, dob: dep_dob } = req.body;
    const { usr_id: userId } = req.user;
    const updatedDependent = await updateDependent(dep_id, { dep_id, dep_fn, dep_ln, dep_gender, dep_dob }, userId);
    res.status(200).json({
      id: updatedDependent.dep_id,
      fname: updatedDependent.dep_fn,
      lname: updatedDependent.dep_ln,
      dob: updatedDependent.dep_dob,
      gender: updatedDependent.dep_gender,
      age: Math.floor((new Date() - new Date(updatedDependent.dep_dob).getTime()) / 3.15576e+10)
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const deleteDependentById = async (req, res) => {
  try {
    const { id } = req.params;
    const { usr_id: userId } = req.user;
    const deletedDependent = await deleteDependent(id, userId);
    res.status(200).json({
      id: deletedDependent.dep_id,
      fname: deletedDependent.dep_fn,
      lname: deletedDependent.dep_ln,
      dob: deletedDependent.dep_dob,
      gender: deletedDependent.gender,
      age: Math.floor((new Date() - new Date(deletedDependent.dep_dob).getTime()) / 3.15576e+10)
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getAllDependents,
  getDependentById,
  postNewDependent,
  updateDependentById,
  deleteDependentById
};
