import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDb from "./Config/Config.js";
import Router from "./Routes/Routes.js";
import connect_cloudinary from "./Config/Cloudinary.js";


dotenv.config();

// -------------------- App Init --------------------
const app = express();


// -------------------- Middleware --------------------


const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175"
];

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin like mobile apps or curl
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = "The CORS policy for this site does not allow access from the specified Origin.";
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));


// -------------------- Database --------------------
ConnectDb();
connect_cloudinary();


// -------------------- Routes --------------------
app.use("/api", Router);

// -------------------- Server --------------------
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
