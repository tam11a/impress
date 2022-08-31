const express = require("express");
const {
  register, getAllValues, getByID, getByName,
} = require("../controllers/device");
const router = express.Router();

// Register API
/**
 * @swagger
 * /api/device/register:
 *  post:
 *    tags: [Device]
 *    summary: Register Device
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Device'
 *    responses:
 *      201:
 *        description: Device Creation Successful
 *      400:
 *        description: Bad Request
 *
 */
router.route("/register").post(register);

// Get All Device
/**
 * @swagger
 * /api/device/get-all:
 *  get:
 *    tags: [Device]
 *    summary: Get All Device List
 *    responses:
 *      200:
 *        description: Get All Device List Successful
 *      400:
 *        description: Bad Request
 *
 */
 router.route("/get-all").get(getAllValues);

 // Get Device By ID
/**
 * @swagger
 * /api/device/id/{id}:
 *  get:
 *    tags: [Device]
 *    summary: Get Device Info List
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: Device Id
 *    responses:
 *      200:
 *        description: Get Device Info Successful
 *      400:
 *        description: Bad Request
 *
 */
 router.route("/id/:id").get(getByID);

// Get Device By Name
/**
 * @swagger
 * /api/device/search/{name}:
 *  get:
 *    tags: [Device]
 *    summary: Search Device
 *    parameters:
 *      - in: path
 *        name: name
 *        required: true
 *        type: string
 *        description: Device Name
 *    responses:
 *      200:
 *        description: Search Device Successful
 *      400:
 *        description: Bad Request
 *
 */
 router.route("/search/:name").get(getByName);


module.exports = router;
