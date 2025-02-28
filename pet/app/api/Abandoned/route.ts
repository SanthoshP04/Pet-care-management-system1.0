// import { NextResponse } from "next/server";
import ConnectToDb from "@/lib/connectToDb";
import Abandoneds from "@/models/AbandonedModel";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      petBreed,
      location,
      phoneNumber,
      petCondition,
      uploadImageURL,
    } = await req.json();

    // Establish DB connection
    await ConnectToDb();

    // Insert data into MongoDB
    await Abandoneds.create({
      petBreed,
      location,
      phoneNumber,
      petCondition,
      uploadImageURL,
    });

    return NextResponse.json({ message: "Form Submitted" });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
