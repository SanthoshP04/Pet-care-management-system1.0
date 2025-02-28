import { NextResponse } from "next/server";
import ConnectToDbNormal from "@/utils/connectToDbNormal";
import Abandoneds from "@/Models/AbandonedSchema";

export async function GET(req: Request) {
  
    
    await ConnectToDbNormal();

    
    const AbandonedFormData = await Abandoneds.find({});

    
    return NextResponse.json({ AbandonedFormData  });
  } 
