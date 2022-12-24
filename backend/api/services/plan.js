const db = require('../database');
const PLANTYPE = require('../../enums/planTypes');

const createPlan = async (plan) => {
  try {
    const { rows } = await db.query('INSERT INTO plans (plan_type, plan_title, plan_price, plan_nofkids) VALUES ($1, $2, $3, $4) RETURNING *', [plan.plan_type, plan.plan_title, plan.plan_price, plan.plan_nofkids]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

const updatePlan = async (id, plan) => {
  try {
    const { rows } = await db.query('UPDATE plans SET plan_type = $1, plan_title = $2, plan_price = $3, plan_nofkids = $4 WHERE plan_id = $5 RETURNING *', [plan.plan_type, plan.plan_title, plan.plan_price, plan.plan_nofkids, id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

const deletePlan = async (id) => {
  try {
    const { rows } = await db.query('DELETE FROM plans WHERE plan_id = $1 RETURNING *', [id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

const getPlans = async () => {
  try {
    const { rows } = await db.query('SELECT * FROM plans');
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = { createPlan, updatePlan, deletePlan, getPlans };