const State = require("../../model/State");

exports.create = async (req, res, next) => {
  // Get Values
  const { device, temp, registor, lat, lng, alt } = req.query;

  try {
    // Store State to DB
    await State.create({
      device,
      temp,
      registor,
      lat,
      lng,
      alt,
    });

    // Send Success Response
    res.status(201).json({
      success: true,
      message: "State Stored Successfully",
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
      message: "Device List Get Successfully",
      data: await State.find({
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
    // Get State Info
    const stateInfo = await State.findById(req.params.id).populate("device");
    // Send Success Response
    res.status(200).json(
      stateInfo
        ? {
            success: true,
            message: "State Get Successfully",
            data: stateInfo,
          }
        : {
            success: false,
            message: "No State Found",
          }
    );

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
      data: await State.find({
        name: {
          $regex: new RegExp(req.params.name, "i"),
        },
      }),
    });

    // On Error
  } catch (error) {
    // Send Error Response
    next(error);
  }
};
