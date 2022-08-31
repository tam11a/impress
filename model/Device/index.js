const mongoose = require("mongoose");

var deviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxLength: 31,
      unique: [true, "The Name is already Taken"], // One Account with One Username
      required: [true, "Please Provide a Name"], // If Required
      trim: true,
    },
    phone: {
      type: String,
      validate: [/01\d{9}$/, "Invalid Phone Number"],
      required: [true, "Please Provide User Phone Number"],
    },
  },
  { timestamps: true }
);

const Device = mongoose.model("Device", deviceSchema);
module.exports = Device;

/**
 * @swagger
 * components:
 *  schemas:
 *   Device:
 *     type: object
 *     required:
 *        - name
 *        - phone
 *     properties:
 *       name:
 *         type: string
 *         unique: true
 *         maxLength: 31
 *       phone:
 *         type: string
 *         pattern: 01\d{9}$
 *
 */
