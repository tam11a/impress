const Device = require("../../model/Device");

exports.register = async (req, res, next) => {
  // Get Values
  const { name, phone } = req.body;

  try {
    // Store Device to DB
    await Device.create({
      name,
      phone
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
      data: await Device.find({}),
    });

    // On Error
  } catch (error) {
    // Send Error Response
    next(error);
  }
};

exports.getByID = async (req, res, next) => {
  try {
    // Send Success Response
    res.status(200).json({
      success: true,
      message: "Device Get Successfully",
      data: await Device.findById(req.params.id),
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
          $regex: new RegExp(req.params.name, 'i')
        }
      }),
    });

    // On Error
  } catch (error) {
    // Send Error Response
    next(error);
  }
};
