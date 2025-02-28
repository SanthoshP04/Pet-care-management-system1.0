
import ConnectToDb from "@/utils/connectToDb";


import Pet from "@/Models/PetSchema";

import {NextResponse} from "next/server"

export async function POST(req: Request) {
    const{
        PetName,
            PetBreed,
            PetGender,
            PetAge,
            PetIntro,
            PetDesc,
            UploadImageURL
      } = await req.json()

   await ConnectToDb()
   await Pet.create({
    PetName,
    PetBreed,
    PetGender,
    PetAge,
    PetIntro,
    PetDesc,
    UploadImageURL
   }) 
   return NextResponse.json({ message: "New Pet Added" })
    }

    export async function GET() {
        await ConnectToDb()
        const AllPetsData = await Pet.find({})
        return NextResponse.json({AllPetsData })
     
}
    
    
    
    
    
    
    
    
    
    
   