import ConnectToDb from "@/lib/connectToDb";
import Pet from "@/models/PetSchema";
import { NextResponse } from "next/server";


export async function GET() {
    await ConnectToDb()
    const AllPetsData = await Pet.find({})
    return NextResponse.json({AllPetsData })
}