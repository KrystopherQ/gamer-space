const { Schema } = require('mongoose');

const gameSchema = new Schema( {
    name: {
        type: String,
        required: true,
    },
    box_art_url: {
        type: String,
    }
})
module.exports = gameSchema;
