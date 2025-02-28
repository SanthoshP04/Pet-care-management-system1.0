
import ConnectToDbNormal from "@/utils/connectToDbNormal";
import { NextResponse } from "next/server";

import ContactUs from "@/Models/ContactSchema";


export async function GET(req: Request){
 await ConnectToDbNormal()

 const ContactFormData = await ContactUs.find({})

 return NextResponse.json({ ContactFormData })
}
