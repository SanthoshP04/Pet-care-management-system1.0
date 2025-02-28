import mongoose from "mongoose";


const ConnectToDb = async () =>{
    try {
        if (mongoose.connection.readyState === 1){
            return
        }
      if(process.env.MONGODB_URI) {
        await mongoose.connect(process.env.MONGODB_URI)
      }else{
        throw new Error("MONGODB_URI not found")
      }

      
    }catch (error){
        console.log(error)
    }
}
export default ConnectToDb