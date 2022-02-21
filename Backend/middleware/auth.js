const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

// Protect routes
exports.protect = (async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Set token from Bearer token in header
    token = req.headers.authorization.split(' ')[1];
    // Set token from cookie
  }
  // else if (req.cookies.token) {
  //   token = req.cookies.token;
  // }

  // Make sure token exists
  if (!token) {
    return res.status(401).json({success: false, msg: "Not authorised to access this route"});
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.admin = await Admin.findById(decoded.id);

    next();
  } catch (error) {
    return res.status(401).json({success: false, msg: "Not authorised to access this route"});
  }
});