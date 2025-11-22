const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  bill: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bill',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: [true, 'Please add an amount'],
    min: [0, 'Amount cannot be negative']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    trim: true,
    maxlength: [200, 'Description cannot be more than 200 characters']
  },
  paymentMethod: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PaymentMethod',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  transactionId: {
    type: String,
    unique: true
  },
  billingAddress: {
    street: String,
    city: String,
    zipCode: String,
    country: String
  },
  cardHolderName: String,
  cardDetails: {
    lastFourDigits: String,
    expiryMonth: String,
    expiryYear: String,
    cardType: String, // visa, mastercard, etc.
  },
  email: String,
  phoneNumber: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Generate a transaction ID before saving
PaymentSchema.pre('save', function(next) {
  if (!this.transactionId) {
    this.transactionId = Date.now().toString() + 
      Math.random().toString(36).substring(2, 10).toUpperCase();
  }
  next();
});

module.exports = mongoose.model('Payment', PaymentSchema);