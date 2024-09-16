import User from '../../../../models/User';
import connectDB from '../../../../middelwear/dbconnect';

// var CryptoJS = require("crypto-js")
import { NextResponse } from 'next/server';
// Handle POST requests
export async function POST(req) {
  await connectDB()

  const body = await req.json();

  // Destructuring values from the request body
  const { email, password } = body;

  // Check if all required fields are provided
  if ( !email || !password) {
    return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
  }

  // Find the user by email
  let user = await User.findOne({ Email: body.email });

  // If user is not found
  if (!user) {
    return NextResponse.json({ login: false, message: 'Email does not exist' }, { status: 404 });
  }

  // Decrypt the stored password
  // var bytes = CryptoJS.AES.decrypt(user.Password, process.env.NEXT_PUBLIC_JWT_CODE);
  // var decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

  // Check if the decrypted password matches the provided password
  if (user.Password === password) {
    // Generate JWT token
    var token = { "username": user.UserName,"email":user.Email, "id": user._id };  
    var token =JSON.stringify({
      "username": user.UserName,"email":user.Email, "id": user._id,
    })
    return NextResponse.json({ login: true, token: token }, { status: 200 });
  } else {
    return NextResponse.json({ login: false, message: 'Invalid password' }, { status: 401 });
  }
}




// import User from '../../../../models/User'
// import connectDB from '../../../../middelwear/dbconnect';
// var CryptoJS = require("crypto-js");
// var jwt = require('jsonwebtoken');

// const handler = async (req, res) => {
//   if (req.method === 'POST') {

//       let userem = await User.find({ "Email": req.body.email });

//       if(!userem[0]){

//          res.status(200).json({ login:false , error : "email doesnot exsist" })

//       }
//       else{
//         var bytes  = CryptoJS.AES.decrypt(userem[0].Password, process.env.NEXT_PUBLIC_JWT_CODE);
//         var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

//         if (decryptedData == req.body.password) 
//         {
//           var token = jwt.sign({user : { "username" : userem[0].UserName , "id": userem[0]._id}}, process.env.NEXT_PUBLIC_JWT_CODE);
//           res.status(200).json({ login: true , token : token })     
//         }
//         else {
//           res.status(200).json({ login:false , error: 'Invalid password' })
//         }
//       }
//     }

// }



// export default connectDB(handler)