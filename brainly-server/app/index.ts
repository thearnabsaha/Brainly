import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 3000;
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import connectDB from './database/db';
import { User } from './model/UserModel';
import { z } from 'zod';
import { jwtAuth } from './jwt/jwtAuth';
import { Content } from './model/ContentModel';
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
const schema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    username: z.string().min(3, { message: 'Username must be at least 3 characters long' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
      .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
      .regex(/[0-9]/, { message: 'Password must contain at least one number' })
      .regex(/[@$!%*?&]/, { message: 'Password must contain at least one special character' }),
  });
app.get('/', (req, res) => {
    res.send('hello from simple server :)');
});
app.post('/signup', async (req, res) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
        res.status(400).send(result.error.format());
    } else {
        try {
            const user=await User.findOne({username:req.body.username})
            if(!user){
                const hashedPassword=await bcrypt.hash(req.body.password, 10)
                await User.create({username:req.body.username,password:hashedPassword,email:req.body.email})
                res.status(200).send("you signup successfully!")
            }else{
                res.status(409).send("user already exists!!!")
            }
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    }
});
app.post('/signin', async (req, res) => {
    try {
        const user= await User.findOne({username:req.body.username})
        if(user){
            const matched=await bcrypt.compare(req.body.password,user.password)
            if(matched){
                const token =jwt.sign({id:user._id}, String(process.env.JWT_SECRET_KEY), { expiresIn: '1h' });
                res.json({"token":token})
            }else{
                res.send("invalid credentials")
            }
        }else{
            res.send("user doesn't exist")
        }
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});
app.post('/content',jwtAuth ,async (req, res) => {
    try {
        if(req.body.title&&req.body.link){
            await Content.create({title:req.body.title,link:req.body.link,createdBy:req.id,tags:req.body.tags})
        }else{
            res.send("fill all the inputs")
        }
        res.send("New Content Added")
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});
app.get('/content', jwtAuth,async (req, res) => {
    try {
        const contents=await Content.find({createdBy:req.id});
        res.json({"contents":contents})
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});
app.get('/content/:id',jwtAuth,async (req, res) => {
    try {
        const content=await Content.findOne({_id:req.params.id,createdBy:req.id})
        res.json({"content":content})
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});
app.put('/content/:id', jwtAuth,async (req, res) => {
    try {
        await Content.updateOne({id:req.params.id,title:req.id},{$set:{title:req.body.title,link:req.body.link,tags:req.body.tags}})
    } catch (error) {
        console.log(error);
        res.send('hello from simple server :)');
    }
});
app.delete('/content', jwtAuth,async (req, res) => {
    try {
        await Content.deleteMany({createdBy:req.id})
        res.send("All Contents Deleted Successfully")
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});
app.delete('/content/:id', jwtAuth,async (req, res) => {
    try {
        await Content.deleteOne({_id:req.params.id,title:req.id})
        res.send("Selected Content Deleted")
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});
app.post('/share', jwtAuth,(req, res) => {
    res.send('hello from simple server :)');
});
app.post('/share/:id', jwtAuth,(req, res) => {
    res.send('hello from simple server :)');
});


app.listen(port, () => console.log('> Server is up and running on port: ' + port));