const mongoose = require('mongoose');
const CharacterSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    planet: {
        type: String,
        required: true
    },
    ability: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Characters', CharacterSchema);