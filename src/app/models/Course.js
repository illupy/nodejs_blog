const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Course = new Schema({
    name: {type : String, maxLength: 255},
    discription: {type : String, maxLength: 600},
    image: {type : String, maxLength: 255},
    slug:{type:String, maxLength:100},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});
module.exports = mongoose.model('Course',Course)

