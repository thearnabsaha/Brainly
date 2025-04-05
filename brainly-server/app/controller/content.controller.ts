import { Request, Response } from 'express';
import { Content } from '../model/ContentModel';
export const contentPost= async (req:Request, res:Response) => {
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
};
export const contentGet= async (req:Request, res:Response) => {
    try {
        const contents=await Content.find({createdBy:req.id});
        res.status(200).json({"contents":contents})
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
export const ContentGetId= async (req:Request, res:Response) => {
    try {
        const content=await Content.findOne({_id:req.params.id,createdBy:req.id})
        res.json({"content":content})
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};
export const ContentPutId= async (req:Request, res:Response) => {
    try {
        await Content.updateOne({id:req.params.id,title:req.id},{$set:{title:req.body.title,link:req.body.link,tags:req.body.tags}})
    } catch (error) {
        console.log(error);
        res.send('hello from simple server :)');
    }
};
export const ContentDelete= async (req:Request, res:Response)  => {
    try {
        await Content.deleteMany({createdBy:req.id})
        res.send("All Contents Deleted Successfully")
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};
export const ContentDeleteId= async (req:Request, res:Response)  => {
    try {
        await Content.deleteOne({_id:req.params.id,createdBy:req.id})
        res.send("Selected Content Deleted")
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};