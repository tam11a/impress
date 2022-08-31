const Alert = require("../../model/Alert");

exports.create = async (req, res, next) => {
  // Get Values
  const { device, registor } = req.query;

  try {
    // Store Alert to DB
    await Alert.create({
      device,
      registor,
    });

    // Send Success Response
    res.status(201).json({
      success: true,
      message: "Alert Stored Successfully",
    });

    // On Error
  } catch (error) {
    // Send Error Response
    next(error);
  }
};

exports.getAllValues = async (req, res, next) => {
  const { device } = req.params;
  try {
    // Send Success Response
    res.status(200).json({
      success: true,
      message: "List Get Successfully",
      data: await Alert.find({
        device,
      }),
    });

    // On Error
  } catch (error) {
    // Send Error Response
    next(error);
  }
};

exports.getByID = async (req, res, next) => {
  try {
    // Get Alert Info
    const info = await Alert.findById(req.params.id).populate("device");
    // Send Success Response
    res.status(200).json(
      info
        ? {
            success: true,
            message: "Alert Get Successfully",
            data: info,
          }
        : {
            success: false,
            message: "No Alert Found",
          }
    );

    // On Error
  } catch (error) {
    // Send Error Response
    next(error);
  }
};
