
import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const db = async () => {
    try {
        mysql.createConnection({
            user: "root",
            host: "localhost",
            password: "",
            database: "vabus"
          });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


 
export default  db;