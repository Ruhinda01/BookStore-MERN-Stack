import express from "express";
import dotenv from "dotenv";
// import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./Routes/booksRoute.js";
import cors from "cors";

const app = express();

// Middleware to parse the request body
app.use(express.json());
dotenv.config();

// Middleware to allow cross-origin requests
// Option 1: Allow all origins with default of cors(*)
app.use(cors());
// Option 2: Allow custom origins
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// }));

app.get("/", (req, res) => {
    console.log(req);
    return res.status(200).send("Welcome to the backend");
});

app.use('/books', booksRoute);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 5000;
const mongoDBURL = process.env.MONGODBURL;
mongoose
    .connect(mongoDBURL)
    .then(() => {
        // the app will only listen when the connection to the database is successful
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        });
    })
    .catch((err) => {
        console.log(err);
    });

