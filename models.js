////MODULARIZATION WITH MODELS:
    ////the models file will contain all of the mongoose connection and schema definitions
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/BeltExam');

    

    var PetSchema = new mongoose.Schema({
        name: { type: String, min: 3, required : [true, "Pet name require atleast 3 character"]},
        type: { type: String, min: 3, required : [true, "Pet type require atleast 3 character"]},
        description: {type: String , min: 3, default : "", required : [true, "Pet description require atleast 3 character"]},
        skill1: String,
        skill2: String,
        skill3: String
        
    },{
        timestamps : true
    });


    mongoose.model('Pet', PetSchema); 
    var Pet = mongoose.model('Pet');

    module.exports = Pet;