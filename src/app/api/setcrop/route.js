import { NextResponse } from 'next/server';
import dbConnect from '../../../../middelwear/dbconnect';  // Adjust path accordingly
import Crop from '../../../../models/SetCrop';  // Assuming the model is named Crop

// GET method to retrieve the moisture level for a specific crop
export async function GET() {
  try {

    await dbConnect();

    const cropData = await Crop.findOne();

    if (!cropData) {
      return NextResponse.json({ success: false, message: 'Crop not set' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: cropData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

// POST method to create or update moisture level for a specific crop
export async function POST(req) {
  try {
    // Connect to MongoDB
    await dbConnect();

    // Get data from the request body
    const body = await req.json();
    const { crop, moisture } = body;

    // Validate that both crop and moisture are provided
    if (!crop || !moisture) {
      return NextResponse.json({ success: false, message: 'Crop and moisture level are required' }, { status: 400 });
    }

    // Find the crop and update or create if it doesn't exist
    await Crop.deleteMany({});

    // Insert the new crop data
    const newCrop = await Crop.create({ crop, moisture });

    return NextResponse.json({ success: true, data: newCrop }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
