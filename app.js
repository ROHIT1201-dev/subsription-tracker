import express from "express"
import {PORT} from "./config/env.js";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
import SubscriptionRouter from "./routes/subscriptionRoutes.js";

const app=express()

app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/subscriptions", SubscriptionRouter);    

app.get("/",(req,res)=>{
    res.send("Welcome to the Subscription Tracker!")
}
)



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

export default app