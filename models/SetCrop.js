const mongoose = require('mongoose');

const SetCropSchema = new mongoose.Schema({
     crop : {type:String, required:true},
     moisture : {type:Number, required:true },
});

const SetCrop = mongoose.models.SetCrop || mongoose.model('SetCrop', SetCropSchema);
   
export default SetCrop;