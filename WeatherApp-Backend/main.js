import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import userRouter from './controllers/userController.js';
import roleRouter from './controllers/roleController.js';
import weatherRouter from './controllers/weatherController.js';

const app = express();
app.use(express.json());

const corsOptions = { origin: ["http://localhost:5173"]};
app.use(cors(corsOptions));

app.use('/users', userRouter);
app.use('/roles', roleRouter);
app.use('/weather', weatherRouter);
dotenv.config();
//Database Connection
connectDB();
//Defaut url
app.get("/", async (req, res) => {
    res.json({message: "Server Started and MongoDB Connected Successfully...."});
});


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Server running on http://localhost:" + PORT);
});
