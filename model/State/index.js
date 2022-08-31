const mongoose = require("mongoose");

var stateSchema = new mongoose.Schema(
  {
    device: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Device",
      required: [true, "Please Provide Device Id"], // If Required
    },
    temp: {
      type: Number,
      required: [true, "Please Provide Temparature"],
    },
    registor: {
      type: Number,
      required: [true, "Please Provide Registor"],
    },
    lat: {
      type: String,
      required: [true, "Please Provide Latitude"],
      trim: true,
    },
    lng: {
      type: String,
      required: [true, "Please Provide Longitude"],
      trim: true,
    },
    alt: {
      type: String,
      required: [true, "Please Provide Altitude"],
      trim: true,
    },
  },
  { timestamps: true }
);

const State = mongoose.model("State", stateSchema);
module.exports = State;

/**
 * @swagger
 * components:
 *  schemas:
 *   State:
 *     type: object
 *     required:
 *        - device
 *        - temp
 *        - registor
 *        - lat
 *        - lng
 *        - alt
 *     properties:
 *       device:
 *         type: string
 *         description: ObjectId
 *       temp:
 *         type: number
 *       registor:
 *         type: number
 *       lat:
 *         type: string
 *       lng:
 *         type: string
 *       alt:
 *         type: string
 */
