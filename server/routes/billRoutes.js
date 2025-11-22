const express = require('express');
const router = express.Router();
const {
  getBills,
  getBill,
  getUserBills,
  createBill,
  updateBill,
  deleteBill,
  getBillsByCategory
} = require('../controllers/billController');

// Get all bills and create new bill
router
  .route('/')
  .get(getBills)
  .post(createBill);

// Get bills by category
router.route('/category/:category')
  .get(getBillsByCategory);

// Get bills for specific user
router.route('/user/:userId')
  .get(getUserBills);

// Get, update and delete specific bill
router
  .route('/:id')
  .get(getBill)
  .put(updateBill)
  .delete(deleteBill);

module.exports = router;