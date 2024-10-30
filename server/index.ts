import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan"
import cors from "cors";

// ROUTE IMPORTS

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy : "cross-origin"}))
app.use(morgan("common"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: false }))
app.use(cors())

//ROUTE
app.get("/", (req, res) => {
    res.send("This is home");
})

//SERVER
const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
})