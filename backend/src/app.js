import express from "express"
import dotenv from "dotenv"
dotenv.config()
import authRouter from "./routes/authRoute.js"
import categoryRouter from "./routes/categoryRoute.js"
import productRouter from "./routes/productRoute.js"
import orderRouter from "./routes/orderRoute.js"
import paymentRouter from "./routes/paymentRoute.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import path from "path"

const app = express()
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5502",
    credentials: true
}))
app.use(express.json())
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')))

app.use("/auth", authRouter)
app.use("/category", categoryRouter)
app.use("/product", productRouter)
app.use("/order", orderRouter)
app.use("/payment", paymentRouter)

export default app