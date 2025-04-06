import mongoose from 'mongoose';

const shareSchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    isSharing: {
        type: Boolean,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

export const Share = mongoose.model('Share', shareSchema);