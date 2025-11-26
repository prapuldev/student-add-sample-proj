import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import { fileURLToPath } from "url";
import { dirname } from "path";

import "./models/mysql.js";
import StudentRouter from "./models/students.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

app.use("/api/students", StudentRouter);

// Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
