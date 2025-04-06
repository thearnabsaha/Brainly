import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 3000;
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './database/db';
import userRoutes from './routes/user.routes'
import contentRoutes from './routes/content.routes'
import { jwtAuth } from './jwt/jwtAuth';
import { Content } from './model/ContentModel';
import { User } from './model/UserModel';
import { v4 as uuidv4 } from 'uuid';
import { Share } from './model/ShareModel';
const morganFormat = ':method :url :status :response-time ms';

app.use(
  morgan(morganFormat)
);

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());
connectDB()
app.use('/',userRoutes);
app.use('/content',contentRoutes);
app.post("/shareon",jwtAuth,async (req,res)=>{
try {
  const myUniqueID = uuidv4();
  const alreadyShared=await Share.findOne({createdBy:req.id})
  if(!alreadyShared){
    await Share.create({slug:myUniqueID,isSharing:true,createdBy:req.id})
    res.status(201).json({"slug":myUniqueID,"isSharing":true})
  }else{
    res.status(409).send("Already Shared")
  }
} catch (error) {
  res.status(500).send(error)
}
})
app.post("/shareoff",jwtAuth,async (req,res)=>{
  try {
    await Share.deleteMany({createdBy:req.id})
    res.status(200).json({"isSharing":false})
  } catch (error) {
    res.status(500).send(error)
  }
})
app.get("/share/:id",async (req,res)=>{
  try {
    const shared=await Share.find({slug:req.params.id})
    const contents=await Content.find({createdBy:shared[0].createdBy})
    res.status(200).send(contents)
  } catch (error) {
    res.status(500).send(error)
  }

})
app.listen(port, () => console.log('> Server is up and running on port: ' + port));