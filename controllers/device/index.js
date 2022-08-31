const Device = require("../../model/Device");
const ErrorResponse = require("../../utils/errorResponse");

exports.register = async (req, res, next) => {
  // Get Values
  const { name, userPhone, devicePhone } = req.body;

  try {
    // Store Device to DB
    await Device.create({
      name,
      userPhone,
      devicePhone,
    });

    // Send Success Response
    res.status(201).json({
      success: true,
      message: "Device Created Successfully",
    });

    // On Error
  } catch (error) {
    // Send Error Response
    next(error);
  }
};

exports.getAllValues = async (req, res, next) => {
  try {
    // Send Success Response
    res.status(200).json({
      success: true,
      message: "Device List Get Successfully",
      data: await Device.find({}).populate("lastState totalAlert"),
    });

    // On Error
  } catch (error) {
    // Send Error Response
    next(error);
  }
};

exports.getByID = async (req, res, next) => {
  try {
    // Get Device Info
    const deviceInfo = await Device.findById(req.params.id).populate(
      "lastState totalAlert"
    );
    // Send Success Response
    res.status(200).json(
      deviceInfo
        ? {
            success: true,
            message: "Device Get Successfully",
            data: deviceInfo,
          }
        : {
            success: false,
            message: "No Device Found",
          }
    );

    // On Error
  } catch (error) {
    // Send Error Response
    next(error);
  }
};

exports.updateByID = async (req, res, next) => {
  try {
    // Send Success Response
    res.status(200).json({
      success: true,
      message: "Device Updated Successfully",
      data: await Device.updateOne(
        {
          _id: req.params.id,
        },
        req.body
      ),
    });

    // On Error
  } catch (error) {
    // Send Error Response
    next(error);
  }
};

exports.getByName = async (req, res, next) => {
  try {
    // Send Success Response
    res.status(200).json({
      success: true,
      message: "Device Get Successfully",
      data: await Device.find({
        name: {
          $regex: new RegExp(req.params.name, "i"),
        },
      }).populate("lastState totalAlert"),
    });

    // On Error
  } catch (error) {
    // Send Error Response
    next(error);
  }
};
