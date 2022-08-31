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
    userPhone: {
      type: String,
      validate: [/01\d{9}$/, "Invalid Phone Number"],
      required: [true, "Please Provide User Phone Number"],
    },
    devicePhone: {
      type: String,
      validate: [/01\d{9}$/, "Invalid Phone Number"],
      required: [true, "Please Provide Device Phone Number"],
    },
  },
  { timestamps: true }
);

deviceSchema.virtual("lastState", {
  ref: "State",
  localField: "_id",
  foreignField: "device",
  justOne: true,
  options: { sort: { createdAt: -1 }, limit: 1 },
});


deviceSchema.virtual("totalAlert", {
  ref: "Alert",
  localField: "_id",
  foreignField: "device",
  count: true,
});


deviceSchema.set("toObject", { virtuals: true });
deviceSchema.set("toJSON", { virtuals: true });

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
 *       userPhone:
 *         type: string
 *         pattern: 01\d{9}$
 *       devicePhone:
 *         type: string
 *         pattern: 01\d{9}$
 *
 */
