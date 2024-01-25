import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import passport from "passport";
import jwt from "jsonwebtoken";
import { Strategy as localStrategy } from "passport-local";

import { connectDatabase } from "./database/index.js";

dotenv.config();

const port = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

connectDatabase(process.env.MONGODB_URL);

app.listen(port, () => {
  console.log(`Server running on Port ${port}`);
});
