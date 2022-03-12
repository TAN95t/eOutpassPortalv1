const { match } = require("assert");
const Outpass = require("../models/Outpass");
const sendEmail = require("../utils/sendEmail")


// @desc Get all Outpass Applications
// @route GET /api/v1/outpass
// @access Private/Warden
exports.getOutpasses = async (req, res, next) => {

    try {

        const outpass = await Outpass.find({ outpassStatus: ["applied"] });

        res.status(200).json({ success: true, count: outpass.length, msg: "all outpass applications", data: outpass })
    } catch (error) {
        return res.status(400).json({ success: false, msg: "Some unexpected error occured" });
    }

}


// @desc Get all Outpass Applications associated to a user
// @route GET /api/v1/outpass/useroutpasses
// @access Private/Student
exports.getUserOutpasses = async (req, res, next) => {
    try {
        const outpass = await Outpass.find({ userId: req.user.id });

        res.status(200).json({ success: true, msg: `all outpass applications associated to user ${req.user.id}`, data: outpass })
    } catch (error) {
        return res.status(400).json({ success: false, msg: "Some unexpected error occured" });

    }
}



// @desc Get single Outpass Application
// @route GET /api/v1/outpass/:id
// @access Public
exports.getOutpass = async (req, res, next) => {
    try {
        const outpass = await Outpass.findById(req.params.id);

        if (!outpass) {
            return res.status(400).json({ success: false, msg: `outpass with id: ${req.params.id} not found` });
        }

        res.status(200).json({ success: true, msg: `outpass with id ${req.params.id} found`, data: outpass });

    } catch (error) {
        res.status(400).json({ success: false, msg: "some unexpected error occured" });
    }

}


// @desc Create Outpass Application
// @route POST /api/v1/outpass
// @access Private/Student
exports.createOutpass = async (req, res, next) => {
    try {
        let userID = req.user.id;
        let outpassExists = await Outpass.findOne({ userId: userID, outpassStatus: ["applied"] });
        if (outpassExists) {
            return res.status(400).json({ success: false, msg: `an Outpass application already exists for : ${req.user.name} with status: ${outpassExists.outpassStatus},  please wait or delete the outpass to re-apply` });
        }
        else {
            req.body.userId = req.user.id;
            const outpass = await Outpass.create(req.body);
            res.status(200).json({ success: true, msg: "Outpass Application created" });
        }



    } catch (error) {
        res.status(500).json({ success: false, msg: "some error occured" });
    }

}

// @desc Delete Outpass Application
// @route DELETE /api/v1/outpass/:id
// @access Private/Warden
exports.deleteOutpass = async (req, res, next) => {
    try {
        const outpass = await Outpass.findByIdAndDelete(req.params.id);

        res.status(200).json({ success: true, msg: `Outpass Application with id: ${req.params.id} deleted ` })

        if (!outpass) {
            return res.status(400).json({ success: false, msg: `outpass with id: ${req.params.id} not found` });
        }

    } catch (error) {
        res.status(400).json({ success: false, msg: "some unexpected error occured" });
    }

}


// @desc Update Outpass Application
// @route PUT /api/v1/bootcamps/:id
// @access User
exports.updateOutpass = async (req, res, next) => {
    try {
        const outpass = await Outpass.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!outpass) {
            return res.status(400).json({ success: false, msg: `outpass with id: ${req.params.id} not found` });
        }

        res
            .status(200)
            .json({ success: "true", data: outpass, msg: `outpass ${req.params.id} updated successfully by ${req.user.name}` });

        const message = `Your Outpass Details have been modified by ${req.user.name}, to status: ${outpass.outpassStatus}`
        console.log(message);
        await sendEmail({
            email: outpass.email,
            subject: 'Outpass Status Update',
            message,
        });
        console.log("Email sent");


    } catch (error) {
        res.status(400).json({ success: false, msg: "some unexpected error occured" });
    }

}


// @desc Get Outpass Application status
// @route GET /api/v1/outpass/:id
// @access Public
exports.outpassStatus = async (req, res, next) => {
    try {
        const outpass = await Outpass.findById(req.params.id);

        if (!outpass) {
            return res.status(400).json({ success: false, msg: `outpass with id: ${req.params.id} not found` });
        }

        const data = {
            Name: outpass.name,
            Email: outpass.email,
            Registration: outpass.registrationNo,
            Status: outpass.outpassStatus,
            IssuedOn: outpass.toDate,
            IssuedBy: outpass.issuedBy
        }

        res.status(200).json({ success: true, msg: `outpass with id ${req.params.id} found`, data });



    } catch (error) {
        res.status(400).json({ success: false, msg: "some unexpected error occured" });
    }
}
