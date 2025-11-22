const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Flight Booking',
      'Hotel Reservation',
      'Package Tour',
      'Transportation',
      'Travel Insurance',
      'Visa Services',
      'Excursions',
      'Cruise Booking',
      'Car Rental',
      'Travel Consultation'
    ]
  },
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  status: {
    type: String,
    enum: ['Pending', 'Paid', 'Overdue', 'Cancelled'],
    default: 'Pending'
  },
  dueDate: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Bill', BillSchema);