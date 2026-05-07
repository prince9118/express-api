import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./src/config/db.js";
import userRoute from "./src/routes/userRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use("/api",userRoutes);

//Error handling Middlewares

//Testing Postgre connections

app.get("/",async(req,res)=>{
    const result=await pool.query("SELECT current_database()");
    res.send(`The database name is : ${result.rows[0].current_database}`)
});

//Server Running
app.listen(port,() => {
console.log(`Server is running on http:localhost:${port}`);
})



