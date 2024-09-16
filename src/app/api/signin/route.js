import User from '../../../../models/User'
import connectDB from '../../../../middelwear/dbconnect';
// var CryptoJS = require("crypto-js")

import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({ message: 'Get request received', name: 'Pantu' }, { status: 200 });
}
// export async function POST(req) {
    
//     await connectDB();
//     const body = await req.json();

//     // Destructuring values from the request body
//     const { name, email, password } = body;

//     // Check if all required fields are provided
//     if (!name || !email || !password) {
//       return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
//     }
//     let p = new User({
//         UserName: name,
//         Email: email,
//         Password : password,
//     })
//     await p.save();
//     return NextResponse.json({ login: true, token: p._id }, { status: 200 })

// }


export async function POST(req) {
    await connectDB();
    const body = await req.json();

    // Destructuring values from the request body
    const { name, email, password } = body;

    // Check if all required fields are provided
    if (!name || !email || !password) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    let userem = await User.find({ "Email": email });
    if (!userem[0]) {
        let p = new User({
            UserName: name,
            Email: email,
            Password : password,
        })
        // Password: CryptoJS.AES.encrypt(JSON.stringify(req.body.password), process.env.NEXT_PUBLIC_JWT_CODE).toString(),
        await p.save();
        var token = { "username": p.UserName,"email":p.Email, "id": p._id };
        return NextResponse.json({ login: true, token : token }, { status: 200 })
    }
    else {
        return NextResponse.json({ login: false, message: 'email already exsist' }, { status: 200 })

    }
  
}

// const handler = async (req, res) => {

//     if (req.method === 'POST') {
//         await connectDB();
//         let userem = await User.find({ "Email": req.body.email });
//         if (!userem[0]) {
//             let p = new User({
//                 UserName: req.body.name,
//                 Email: req.body.email,
//                 Password: CryptoJS.AES.encrypt(JSON.stringify(req.body.password), process.env.NEXT_PUBLIC_JWT_CODE).toString(),
//             })

//             await p.save();

//             var token = jwt.sign({ user: { "username": p.UserName, "id": p._id } }, process.env.NEXT_PUBLIC_JWT_CODE);

//             res.status(200).json({ login: true, token: token })
//         }
//         else {
//             res.status(200).json({ login: false, error: 'email already exsist' })

//         }
//     }
//     else {
//         res.status(400).json({ login: false, error: 'invalid method' })
//     }
// }

