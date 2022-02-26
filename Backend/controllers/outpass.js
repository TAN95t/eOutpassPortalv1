const Outpass = require("../models/Outpass");
const sendEmail = require("../utils/sendEmail")


// @desc Get all Outpass Applications
// @route GET /api/v1/outpass
// @access Admin
exports.getOutpasses = async (req, res, next) => {

    try {
        const outpass = await Outpass.find();

        res.status(200).json({ success: true, msg: "all outpass applications", data: outpass })
    } catch (error) {
        return res.status(400).json({ success: false, msg: "Some unexpected error occured" });
    }
    
}

// @desc Get single Outpass Applications
// @route GET /api/v1/outpass/:id
// @access Admin
exports.getOutpass = async (req, res, next) => {
    try {
        const outpass = await Outpass.findById(req.params.id);

        if (!outpass) {
            return res.status(400).json({ success: false, msg: `outpass with id: ${req.params.id} not found` });
        }

        res.status(200).json({success: true, msg: `outpass with id ${req.params.id} found`, data: outpass});

    } catch (error) {    
        res.status(400).json({ success: false, msg: "some unexpected error occured" });
    }
    
}

// @desc Create Outpass Application
// @route POST /api/v1/outpass
// @access Public
exports.createOutpass = async (req, res, next) => {
    try {
        const outpass = await Outpass.create(req.body)
        res.status(200).json({ success: true, msg: "Outpass Application created" });
    } catch (error) {
        res.status(500).json({success: false, msg: "some error occured"});
    }

}

// @desc Delete Outpass Application
// @route DELETE /api/v1/outpass/:id
// @access Admin
exports.deleteOutpass = async (req, res, next) => {
    try {
        const outpass = await Outpass.findByIdAndDelete(req.params.id);

        res.status(200).json({success: true, msg: `Outpass Application with id: ${req.params.id} deleted `})

        if (!outpass) {
            return res.status(400).json({ success: false, msg: `outpass with id: ${req.params.id} not found` });
        }

    } catch (error) {
        res.status(400).json({ success: false, msg: "some unexpected error occured" });
    }
    
}


// @desc Update Outpass Application
// @route PUT /api/v1/bootcamps/:id
// @access Admin
exports.updateOutpass = async(req, res, next)=> {
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
        .json({ success: "true", data: outpass, msg: `outpass ${req.params.id} updated successfully by ${req.admin.name}` });

        const message = `Your Outpass Details have been modified by ${req.admin.name}, to status: ${outpass.outpassStatus}`
        console.log(message);
            await sendEmail({
                email: outpass.email,
                subject: 'Outpass Status Update',
                message,
            });

    } catch (error) {
        res.status(400).json({ success: false, msg: "some unexpected error occured" });
    }
    
}


// @desc Get Outpass Application status
// @route GET /api/v1/outpass/:id
// @access Public
exports.outpassStatus = async (req,res,next)=> {
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

        res.status(200).json({success: true, msg: `outpass with id ${req.params.id} found`, data});

        
        
    } catch (error) {    
        res.status(400).json({ success: false, msg: "some unexpected error occured" });
    }
}
