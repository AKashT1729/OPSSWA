const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
    },
    projectDetails: {
        type: String,
        required: true,
    },
    teamMembers: [
        {
            name: { type: String, required: true },
            registrationNumber: { type: String, required: true },
        }
    ],
    srsFile: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['submitted', 'approved', 'rejected'],
        default: 'submitted',
    },
    submittedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    reviewedByGuide: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    reviewedByHod: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Project', ProjectSchema);
