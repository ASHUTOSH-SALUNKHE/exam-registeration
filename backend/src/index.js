import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import { register , examRegistered , profileData } from './controllers/register.controller.js';
import { getHelp } from './controllers/help.controller.js';
import path from "path";
const app = express();

app.use(
    cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    })
);
dotenv.config();
const __dirname = path.resolve();
const Port = process.env.PORT;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
  }

app.post('/api/register', register);
app.get('/api/examRegistered/:clerkId', examRegistered);
app.get('/api/profileData/:clerkId', profileData);

app.post('/api/gethelp', getHelp);


app.listen(5001, () => {
    console.log("Server is listening on port:",Port)
    connectDB()
})