const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');

function auth(req, res, next) {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded.user;
        next();
    } catch (err) {
        console.error('JWT verification error:', err);
        res.status(401).json({ msg: 'Token is not valid' });
    }
}

function checkRole(requiredRole) {
    return async function (req, res, next) {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ msg: 'Invalid authentication data' });
        }

        try {
            const user = await User.findById(req.user.id);
            if (!user || user.role !== requiredRole) {
                return res.status(403).json({ msg: 'Access denied' });
            }
            next();
        } catch (err) {
            console.error('Role check error:', err.message);
            res.status(500).send('Server error');
        }
    };
}

module.exports = { auth, checkRole };
