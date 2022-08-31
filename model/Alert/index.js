const mongoose = require("mongoose");

var alertSchema = new mongoose.Schema(
  {
    deviceId: {
      type: String,
      maxLength: 31,
      unique: [true, "The Name is already Taken"], // One Account with One Username
      required: [true, "Please Provide a Name"], // If Required
      trim: true,
    },
    registor: {
      type: Number,
      required: [true, "Please Provide Registor Value"]
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
 *       deviceId:
 *         type: string
 *       registor:
 *         type: number
 */
