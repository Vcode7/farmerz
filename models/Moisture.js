const mongoose = require('mongoose');

const MoistureSchema = new mongoose.Schema({
     value : {type:String, required:true},
     time : {type:Date, default:Date.now },
});

const Moisture = mongoose.models.Moisture || mongoose.model('Moisture', MoistureSchema);
   
export default Moisture;