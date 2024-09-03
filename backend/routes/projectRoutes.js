const express = require('express');
const router = express.Router();

const { auth, checkRole } = require('../middleware/auth');
const Project = require('../models/Project');

// Approve a project - only HoDs can approve
router.put('/:id/approve', auth, checkRole('hod'), async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({ msg: 'Project not found' });
        }

        project.status = 'approved';
        project.reviewedByHod = req.user.id;
        await project.save();

        res.json({ msg: 'Project approved' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Reject a project - only HoDs can reject
router.put('/:id/reject', auth, checkRole('hod'), async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({ msg: 'Project not found' });
        }

        project.status = 'rejected';
        project.reviewedByHod = req.user.id;
        await project.save();

        res.json({ msg: 'Project rejected' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Submit a project - only students can submit
router.post('/', auth, checkRole('student'), async (req, res) => {
    try {
        const { projectName, projectDetails, teamMembers } = req.body;

        const newProject = new Project({
            projectName,
            projectDetails,
            teamMembers: JSON.parse(teamMembers),
            srsFile: req.file.path,
            submittedBy: req.user.id,
        });

        const project = await newProject.save();
        res.json(project);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});
