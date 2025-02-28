import mongoose from 'mongoose'




const ConnectToDb = async() => {
    try{ 
        if(mongoose.connection.readyState === 1) {
            console.log("Already Connected to Db")

        }
        
       
if (process.env.MONGODB_URI) {
    await mongoose.connect(process.env.MONGODB_URI)
}
    else {
    throw new Error("MONGODB URI NOT DEFINED")
}
    } catch (error) {
    console.log(error)
    }
}


//0:disconnected
//1:connected
//2:connecting
//3:disconnecting

export default ConnectToDb;
