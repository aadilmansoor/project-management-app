import { search } from './controllers/searchControllers';
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan"
import cors from "cors";

// ROUTE IMPORTS
import projectRoutes from "./routes/projectRoutes";
import taskRoutes from "./routes/taskRoutes";
import searchRoutes from "./routes/searchRoutes";
import userRoutes from "./routes/userRoutes";
import teamRoutes from "./routes/teamRoutes";

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

app.use("/projects",projectRoutes);
app.use("/tasks",taskRoutes);
app.use("/search",searchRoutes);
app.use("/users",userRoutes);
app.use("/teams",teamRoutes);

//SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})