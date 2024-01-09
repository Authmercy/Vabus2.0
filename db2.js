
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const db2 = async () => {
    try {
        mongoose.set('strictQuery',false);
        const conn= await mongoose.connect(process.env.MONGOBD_URI);
        console.log(`MongoDB connected ${conn.connection.host}`);
       } catch (error) {
           console.log(error);
           process.exit(1);
       }
    }



 
export default  db2;