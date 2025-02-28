//connection to db 
// import Pet from "@/Models/PetSchema";
// import ConnectToDb from "@/utils/connectToDb";

// import { NextResponse } from "next/server";

// export async function GET(req: Request, { params } :{params:{Id:string} }) {

//     const { Id } = params;
//     await ConnectToDb()
// try{
//     const SpecificPet = await Pet.findById(Id)
//     if(!SpecificPet){
//         return NextResponse.json({error :"Pet Not Found"},{status:404})

//     }
//     return NextResponse.json({ SpecificPet })
    
// }catch(error){
//     return NextResponse.json({error:(error as Error).message},{status:
//         500})
// }
   
// }
// app/api/NewPet/[Id]/route.ts

import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Pet from "@/Models/PetSchema";

// Async GET method to fetch pet by Id
export async function GET(request: Request, { params }: { params: { Id: string } }) {
  const { Id } = params; // This is fine now as it is inside an async function

  if (!Id) {
    return NextResponse.json({ error: "Pet Id is required" }, { status: 400 });
  }

  try {
    // Fetch pet by Id using the mongoose model
    const pet = await Pet.findById(Id);

    if (!pet) {
      return NextResponse.json({ error: "Pet not found" }, { status: 404 });
    }

    return NextResponse.json(pet, { status: 200 });
  } catch (error) {
    console.error('Error fetching pet:', error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
