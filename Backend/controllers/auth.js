const User = require("../models/User");

// @desc      Register User
// @route     POST /api/v1/auth/register
// @access    Public
exports.register = async (req, res, next) => {
  try {
    // Check whether the user with this email exists already
    let Checkuser = await User.findOne({ email: req.body.email });
    if (Checkuser) {
      return res
        .status(400)
        .json({
          success: "false",
          msg: "Sorry a user with this email already exists try a different email",
        });
    }

    const { name, email, registrationNo, password } = req.body;

    // Create user
    const user = await User.create({
      name,
      email,
      registrationNo,
      password,
    });

    // Create Token
    const token = user.getSignedJwtToken();

    res.status(200).json({ success: true, token });
  } catch (error) {
    return res.status(400).json({ success: false, msg: "Some Error Occured" });
  }
};

// @desc      Login User
// @route     POST /api/v1/auth/login
// @access    Public
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate email & password
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, msg: "Please provide an email and password" });
    }

    // Check for user
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res
        .status(401)
        .json({ success: false, msg: "Invalid Credentials" });
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, msg: "Invalid Credentials" });
    }

    // Create Token
    const token = user.getSignedJwtToken();
    const data = {
      user: {
        id: user.id,
        name: user.name,
      },
    };

    res
      .status(200)
      .json({
        success: true,
        msg: `Login Successful Welcome: ${user.name}`,
        token,
        data,
      });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, msg: "Some Unexpected Error Occured" });
  }
};

// @desc      Get current logged in user
// @route     GET /api/v1/auth/user
// @access    Private
exports.getMe = async (req, res, next) => {
  try {
    // user is already available in req due to the protect middleware
    const user = req.user;

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, msg: "Some Unexpected Error Occured" });
  }
};

// @desc      Update password
// @route     PUT /api/v1/auth/updatepassword
// @access    Private
exports.updatePassword = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("+password");

    // Check current password
    if (!(await user.matchPassword(req.body.currentPassword))) {
      return res
        .status(401)
        .json({ success: false, msg: "Password is Incorrect" });
    }

    user.password = req.body.newPassword;
    await user.save();

    // Create Token
    const token = user.getSignedJwtToken();

    res
      .status(200)
      .json({ success: true, msg: "Password Changed Successfully", token });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, msg: "Some Unexpected Error Occured" });
  }
};

// @desc      Update user details
// @route     PUT /api/v1/auth/updatedetails
// @access    Private
exports.updateDetails = async (req, res, next) => {
  try {
    const fieldsToUpdate = {
      name: req.body.name,
      email: req.body.email,
    };

    const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, msg: "Some Unexpected Error Occured" });
  }
};
