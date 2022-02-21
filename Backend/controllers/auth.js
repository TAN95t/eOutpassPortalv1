const Admin = require('../models/Admin');



// @desc      Register Admin
// @route     POST /api/v1/auth/register
// @access    Public
exports.register = (async (req, res, next) => {
    try {
        // Check whether the user with this email exists already
        let user = await Admin.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success:"false" ,msg: "Sorry a user with this email already exists try a different email" })
        }

        const { name, email, password } = req.body;

        // Create user
        const admin = await Admin.create({
            name,
            email,
            password
        });
    
        // Create Token
        const token = admin.getSignedJwtToken();
    
        res.status(200).json({ success: true, token });
    } catch (error) {
        return res.status(400).json({success: false, msg: "Some Error Occured"});
    }
});


// @desc      Login Admin
// @route     POST /api/v1/auth/login
// @access    Public
exports.login = (async (req, res, next) => {
    try {
     
    const { email, password } = req.body;

    // Validate email & password
    if (!email || !password) {
        return res.status(400).json({ success: false, msg: "Please provide an email and password" });
    }

    // Check for admin
    const admin = await Admin.findOne({ email }).select('+password');

    if (!admin) {
        return res.status(401).json({ success: false, msg: "Invalid Credentials" });
    }

    // Check if password matches
    const isMatch = await admin.matchPassword(password);


    if (!isMatch) {
        return res.status(401).json({ success: false, msg: "Invalid Credentials" });
    }

    // Create Token
    const token = admin.getSignedJwtToken();
    const data = {
        admin: {
            id: admin.id,
            name: admin.name
        }
    }

    res.status(200).json({ success: true ,msg:`Login Successful Welcome: ${admin.name}` , token, data });   
    } catch (error) {
        return res.status(400).json({ success: false, msg: "Some Unexpected Error Occured"})
    }
})


 
// @desc      Get current logged in user
// @route     GET /api/v1/auth/me
// @access    Private
exports.getMe = (async (req, res, next) => {
    // user is already available in req due to the protect middleware
    const admin = req.admin;
  
    res.status(200).json({
      success: true,
      data: admin,
    });
  });