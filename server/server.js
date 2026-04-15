import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();
await connectDB()

//middleware
app.use(cors({
  origin: [
    "https://blogss-websitee.vercel.app", 
    "http://localhost:5173",
    "https://quick-blog-r5usg7epo-tanu-pawars-projects.vercel.app" // <-- Add this new URL
  ], 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

//routes
app.get('/',(req,res)=>res.send("API is working"))
app.use('/api/admin',adminRouter)
app.use('/api/blog',blogRouter)

const PORT=process.env.PORT ||3000;

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))

export default app;