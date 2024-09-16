import { NextResponse } from 'next/server';
import dbConnect from '../../../../middelwear/dbconnect';
import Moisture from '../../../../models/Moisture';  
export async function GET(req) {
  try {
    // Connect to MongoDB
    await dbConnect();

    // Fetch the latest moisture data by sorting by time (descending order)
    const latestMoisture = await Moisture.findOne().sort({ time: -1 });

    if (!latestMoisture) {
      return NextResponse.json({ success: false, message: 'No moisture data found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: latestMoisture }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    // Connect to MongoDB
    await dbConnect();

    // Get data from the request body
    const body = await req.json();

    // Create a new moisture data entry
    const newMoisture = await Moisture.create(body);

    return NextResponse.json({ success: true, data: newMoisture }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}
