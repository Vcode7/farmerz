import User from '../../models/User'
import connectDB from '../../middelwear/dbconnect';
var CryptoJS = require("crypto-js")
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
  
  if (req.method === 'POST') {
    
    let userem = await User.find({ "Email": req.body.email });
    if(!userem[0]){      
      let p = new User({
        UserName: req.body.name,
        Email: req.body.email,
        Password: CryptoJS.AES.encrypt(JSON.stringify(req.body.password), process.env.NEXT_PUBLIC_JWT_CODE).toString(),
      })

      await p.save();

      var token = jwt.sign({user : { "username" : p.UserName , "id": p._id}}, process.env.NEXT_PUBLIC_JWT_CODE);
      
      res.status(200).json({ login: true , token: token })
      }
      else{
        res.status(200).json({login: false, error: 'email already exsist' })
        
      }
    }
    else {
    res.status(400).json({login: false, error: 'invalid method' })
    }
  }
  
  
export default connectDB(handler)