import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { Share } from "../model/ShareModel";
import { Content } from "../model/ContentModel";
export const PostshareOn = async (req: Request, res: Response) => {
    try {
        const myUniqueID = uuidv4();
        const alreadyShared = await Share.findOne({ createdBy: req.id });
        if (!alreadyShared) {
            await Share.create({
                slug: myUniqueID,
                isSharing: true,
                createdBy: req.id,
            });
            res.status(201).json({ slug: myUniqueID, isSharing: true });
        } else {
            res.status(409).send("Already Shared");
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

export const GetshareOn = async (req: Request, res: Response) => {
    try {
        const alreadyShared = await Share.findOne({ createdBy: req.id });
        if (alreadyShared) {
            res
                .status(201)
                .json({ isSharing: alreadyShared.isSharing, slug: alreadyShared.slug });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
export const PostShareOff = async (req: Request, res: Response) => {
    try {
        await Share.deleteMany({ createdBy: req.id });
        res.status(200).json({ isSharing: false });
    } catch (error) {
        res.status(500).send(error);
    }
};
export const GetShareId = async (req: Request, res: Response) => {
    try {
        const shared = await Share.find({ slug: req.params.id });
        const contents = await Content.find({ createdBy: shared[0].createdBy });
        res.status(200).send(contents);
    } catch (error) {
        res.status(500).send(error);
    }
};
