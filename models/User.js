
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
     UserName : {type:String, required:true},
     Email : {type:String, required:true , unique:true},
     Password : {type:String,required:true},
}, {timestamps:true});

const User = mongoose.models.User || mongoose.model('User', UserSchema);
   
export default User;

