const express = require("express");
const { create, getAllValues, getByID } = require("../controllers/alert");
const router = express.Router();

// Register API
/**
 * @swagger
 * /api/alert?device={device}&registor={registor}:
 *  get:
 *    tags: [Alert]
 *    summary: Alert Server
 *    parameters:
 *      - in: query
 *        name: device
 *        required: true
 *        schema:
 *          type: string
 *      - in: query
 *        name: registor
 *        required: true
 *        schema:
 *          type: number
 *
 *    responses:
 *      201:
 *        description: Alert Successful
 *      400:
 *        description: Bad Request
 *
 */
router.route("/").get(create);

// Get All State by Device ID
/**
 * @swagger
 * /api/alert/get-all/{device}:
 *  get:
 *    tags: [Alert]
 *    summary: Get Device Alert List
 *    parameters:
 *      - in: path
 *        name: device
 *        type: string
 *        required: true
 *    responses:
 *      200:
 *        description: Get List Successful
 *      400:
 *        description: Bad Request
 *
 */
router.route("/get-all/:device").get(getAllValues);

// Get Device By ID
/**
 * @swagger
 * /api/alert/id/{id}:
 *  get:
 *    tags: [Alert]
 *    summary: Get Alert by Id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: Alert Id
 *    responses:
 *      200:
 *        description: Get Alert Successful
 *      400:
 *        description: Bad Request
 *
 */

router.route("/id/:id").get(getByID);

module.exports = router;
