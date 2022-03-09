const User = require("../models/User");




// @desc      Get all Users
// @route     GET /api/v1/users/:id
// @access    Private/Admin
exports.getUsers = async (req, res, next) => {
    try {
        const user = await User.find();

        res.status(200).json({success: true, data:user, msg:"Users displayed Successfully"});
    } catch (error) {
        res.status(400).json({success: false, msg:"some unexpected error occured"});
    }
}


// @desc      Get single User
// @route     GET /api/v1/users/:id
// @access    Private/Admin
exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            res.status(401).json({success: false, msg:"User not found"});
        }

        res.status(200).json({success: true, data:user, msg:"User displayed Successfully"});
    } catch (error) {
        res.status(400).json({success: false, msg:"some unexpected error occured"});
    }
}



// @desc      create User
// @route     POST /api/v1/users
// @access    Private/Admin
exports.createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);

        res.status(201).json({success: true, data:user, msg:"User Created Successfully"});
    } catch (error) {
        res.status(400).json({success: false, msg:"some unexpected error occured"});
    }
}


// @desc      Update User
// @route     PUT /api/v1/users/:id
// @access    Private/Admin
exports.updateUser = (async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!user) {
            res.status(401).json({success: false, msg:"User not found"});
        }

        res.status(200).json({success:true, data:user, msg:"User details updated successfully"})
    } catch (error) {
        res.status(400).json({ success: false, msg: "some unexpected error occured" });
    }
});


// @desc      Delete User
// @route     DELETE /api/v1/users/:id
// @access    Private/Admin
exports.deleteUser = (async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            res.status(401).json({success: false, msg:"User not found"});
        }

        res.status(200).json({success:true, msg:"User deleted successfully"})
    } catch (error) {
        res.status(400).json({ success: false, msg: "some unexpected error occured" });
    }
});