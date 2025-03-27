import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
    hash: {
        type: String,
        trim: true,
        unique: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, { timestamps: true });

export const Link = mongoose.model('Link', linkSchema);