import { Router } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { User } from "../model/UserModel";
const router=Router()
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
router.get('/', (req, res) => {
    res.send('hello from simple server :)');
});
router.post('/signup', async (req, res) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
        res.send(result.error.format());
    } else {
        try {
            const user=await User.findOne({username:req.body.username})
            if(!user){
                const hashedPassword=await bcrypt.hash(req.body.password, 10)
                await User.create({username:req.body.username,password:hashedPassword,email:req.body.email})
                res.send("you signup successfully!")
            }else{
                res.send("user already exists!!!")
            }
        } catch (error) {
            console.log(error);
            res.send(error);
    }
    }
});
router.post('/signin', async (req, res) => {
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
export default router;