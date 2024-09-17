import express from "express";
import { router as internshipSubmission } from "./api/internshipSubmission";
import { router as upload } from "./api/upload";
import bodyParser from "body-parser";
import cors from "cors";


export const app = express();


app.use(
    cors({
        origin: "https://intern-app-7a0cd.web.app",
    })
);
app.use(bodyParser.json());
app.use("/internshipSubmission", internshipSubmission);
app.use("/upload", upload);