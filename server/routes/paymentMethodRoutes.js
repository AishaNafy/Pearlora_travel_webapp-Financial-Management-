const express = require('express');
const {
  getPaymentMethods,
  getPaymentMethod,
  createPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod
} = require('../controllers/paymentMethodController');

const router = express.Router();

router
  .route('/')
  .get(getPaymentMethods)
  .post(createPaymentMethod);

router
  .route('/:id')
  .get(getPaymentMethod)
  .put(updatePaymentMethod)
  .delete(deletePaymentMethod);

module.exports = router;