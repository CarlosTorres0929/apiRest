const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    patient: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Prioritarias','Consultas','Agendadas']
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const Product = mongoose.model('Product',ProductSchema);

module.exports = Product;