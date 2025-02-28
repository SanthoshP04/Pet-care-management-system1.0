import mongoose from "mongoose";


const ConnectToDbNormal = async () => {
    try {
        if (mongoose.connection.readyState === 1){
            return
        }
      if(process.env.MONGODB_URI_NORMAL) {
        await mongoose.connect(process.env.MONGODB_URI_NORMAL)
      }else{
        throw new Error("MONGODB_URI_NORMAL not found")
      }

      
    }catch (error){
        console.log(error)
    }
}
export default ConnectToDbNormal
