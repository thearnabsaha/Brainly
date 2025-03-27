import mongoose from 'mongoose';

const ContentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    link: {
        type: String,
        required: true,
        trim: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    tags: [
        {
            type: String
        }
    ]
}, { timestamps: true });

export const Content = mongoose.model('Content', ContentSchema);