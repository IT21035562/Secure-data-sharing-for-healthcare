
const router = require("express").Router();
let record = require("../modals/medrec");
// POST endpoint

router.route("/api/addmedrecord").post(async(req,res) => {
  const Blood_Type = req.body.Blood_Type;
  const BP_Level = req.body.BP_Level;
  const DM_Level = req.body.DM_Level;
  const Cholesterol_Level= req.body.Cholesterol_Level;
  const Heart_Rate = req.body.Heart_Rate;
  const BMI= req.body.BMI;
  const Allergies = req.body.Allergies;
  const Immunization_History = req.body.Immunization_History;
  const Medications= req.body.Medications;
  const Medical_Procedures = req.body.Medical_Procedures;
  const Family_Medical_History = req.body.Family_Medical_History;
  const Vision_and_EyeHealth= req.body.Vision_and_EyeHealth;
  const Dental_Health = req.body.Dental_Health;
  

  // Perform desired operations with the data (e.g., save to a database)
   const newrecord = new record ({
        Blood_Type,
        BP_Level,
        DM_Level,
        Cholesterol_Level,
        Heart_Rate,
        BMI,
        Allergies,
        Immunization_History,
        Medications,
        Medical_Procedures,
        Family_Medical_History,
        Vision_and_EyeHealth,
        Dental_Health
         
        
    })

    //save user
    newrecord.save().then(()=>{
        res.json("New record Added")
    }).catch((err) => {
        console.log(err);
    })
 
});

module.exports = router;