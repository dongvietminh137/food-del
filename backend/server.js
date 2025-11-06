import express from "express"
import cors from "cors"
import path from "path";
import { connectDB } from "./config/db.js";
import foodRoutes from "./routes/foodRoutes.js";


// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// DB connection
connectDB();

// Serve uploaded images (thêm dòng này)
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

//API endpoint
app.use("/api/food",foodRoutes)
app.use("/images", express.static('uploads'))

app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})
//npm run server