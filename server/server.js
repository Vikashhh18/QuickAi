import express from 'express'
import cors from 'cors'
import 'dotenv/config';
import { clerkMiddleware, requireAuth } from '@clerk/express'
import router from './routers/aiRoutes.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routers/userRouter.js';

const app=express();

await connectCloudinary();

app.use(cors());
app.use(express.json());

app.use(clerkMiddleware())

app.get("/",(req,res)=>{
    res.send("hello vicky ji");
})
// app.use(requireAuth());

app.use('/api/ai',router);
app.use('/api/user',userRouter);

const PORT=process.env.PORT||3001;

app.listen(PORT,()=>{
    console.log('Server will start at ',PORT);
})