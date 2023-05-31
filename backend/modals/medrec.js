const mongoose = require('mongoose');

const schema = mongoose.Schema;

const recordschema = new schema({
 
    Blood_Type : {
        type : String,
        required : true
    },
    BP_Level : {
        type : String,
        required : true
    },

    DM_Level : {
        type :String ,
        required : true
    },
    
    Cholesterol_Level : {
        type :String ,
        required : true
    },

    Heart_Rate : {
        type :String ,
        required : true
    },

    BMI : {
        type :String ,
        required : true
    },

    Allergies : {
        type :String ,
        required : false
    },

    Immunization_History : {
        type :String ,
        required : true
    },


    Medications : {
        type :String ,
        required : false
    },


    Medical_Procedures: {
        type :String ,
        required : true
    },


    Family_Medical_History: {
        type :String ,
        required : false
    },

    Vision_and_EyeHealth: {
        type :String ,
        required : false
    },

    Dental_Health : {
        type :String ,
        required : false
    },


})

const record = mongoose.model("record",recordschema);

module.exports = record;