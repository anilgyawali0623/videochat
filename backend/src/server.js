import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
 import cors from "cors";
  
const app = express();
dotenv.config();
app.use(cors({
   origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json());
app.use(cookieParser());
app.listen(3000, function () {
  console.log("server is runnning");
});

