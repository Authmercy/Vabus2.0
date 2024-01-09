import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import mysql from "mysql";

import db2 from "./db2.js";
db2();
import db from "./db.js";
db();
import bcrypt from 'bcrypt'; // https://www.npmjs.com/package/bcrypt npm i bcrypt
import jwt from 'jsonwebtoken'; //https://github.com/auth0/node-jsonwebtoken npm install jsonwebtoken
 
const app = express();
dotenv.config();
 
app.use(express.json());
app.use(cors());


const port = process.env.PORT || 5000;
const con = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "vabus"
})

con.connect(function(err) {
  if(err) {
      console.log("Error in Connection");
  } else {
      console.log("Connected");
  }
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

app.use(cors());
app.use(express.urlencoded({extended :true}))




import user from "./routers/User.js";
import agence from "./routers/agence.js"
import reservation from "./routers/reservation.js"
import category from "./routers/category.js"
import bus from "./routers/bus.js"
import chauffeur from "./routers/chauffeurRoutes.js"

import cookieParser from "cookie-parser";
app.use(express.json());
app.use(cookieParser());
// Routes Middleware
app.use("/api/user", user);
app.use("/api/agence", agence);
app.use("/api/reservation", reservation);
app.use("/api/category",category);
app.use("/api/bus",bus);
app.use("/api/chauffeur",chauffeur)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });
  





















app.get("/" , (req, res)=> {
    res.json("Hello mate!");
});

app.get("*" , (req, res)=> {
    res.sendStatus("404");
});