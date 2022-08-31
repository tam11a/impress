const mongoose = require("mongoose");

var alertSchema = new mongoose.Schema(
  {
    device: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Device",
      required: [true, "Please Provide Device Id"], // If Required
    },
    registor: {
      type: Number,
      required: [true, "Please Provide Registor Value"],
    },
  },
  { timestamps: true }
);

const Alert = mongoose.model("Alert", alertSchema);
module.exports = Alert;

/**
 * @swagger
 * components:
 *  schemas:
 *   Alert:
 *     type: object
 *     required:
 *        - deviceId
 *        - registor
 *     properties:
 *       device:
 *         type: string
 *         description: ObjectId
 *       registor:
 *         type: number
 */
