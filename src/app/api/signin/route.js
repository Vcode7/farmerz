import User from '../../../../models/User'
import connectDB from '../../../../middelwear/dbconnect';
// var CryptoJS = require("crypto-js")

import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({ message: 'Get request received', name: 'Pantu' }, { status: 200 });
}
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
        await p.save();
        var token = { "username": p.UserName,"email":p.Email, "id": p._id };
        return NextResponse.json({ login: true, token : token }, { status: 200 })
    }
    else {
        return NextResponse.json({ login: false, message: 'email already exsist' }, { status: 200 })

    }
  
}

