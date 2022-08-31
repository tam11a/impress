const mongoose = require("mongoose");

var stateSchema = new mongoose.Schema(
  {
    deviceId: {
      type: String,
      required: [true, "Please Provide a Name"], // If Required
      trim: true,
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

const State = mongoose.model("Device", stateSchema);
module.exports = State;

/**
 * @swagger
 * components:
 *  schemas:
 *   State:
 *     type: object
 *     required:
 *        - deviceId
 *        - temp
 *        - registor
 *        - lat
 *        - lng
 *        - alt
 *     properties:
 *       deviceId:
 *         type: string
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
