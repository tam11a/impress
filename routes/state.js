const express = require("express");
const {
  create,
  getAllValues,
  getByID,
  getByName,
} = require("../controllers/state");
const router = express.Router();

// Register API
/**
 * @swagger
 * /api/state/store?device={device}&temp={temp}&registor={registor}&lat={lat}&lng={lng}&alt={alt}:
 *  get:
 *    tags: [State]
 *    summary: Store State
 *    parameters:
 *      - in: query
 *        name: device
 *        required: true
 *        schema:
 *          type: string
 *      - in: query
 *        name: temp
 *        required: true
 *        schema:
 *          type: number
 *      - in: query
 *        name: registor
 *        required: true
 *        schema:
 *          type: number
 *      - in: query
 *        name: lat
 *        required: true
 *        schema:
 *          type: string
 *      - in: query
 *        name: lng
 *        required: true
 *        schema:
 *          type: string
 *      - in: query
 *        name: alt
 *        required: true
 *        schema:
 *          type: string
 *
 *    responses:
 *      201:
 *        description: State Store Successful
 *      400:
 *        description: Bad Request
 *
 */
router.route("/store").get(create);

// Get All State by Device ID
/**
 * @swagger
 * /api/state/get-all/{device}:
 *  get:
 *    tags: [State]
 *    summary: Get Device State List
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
 * /api/state/id/{id}:
 *  get:
 *    tags: [State]
 *    summary: Get State by Id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: State Id
 *    responses:
 *      200:
 *        description: Get State Successful
 *      400:
 *        description: Bad Request
 *
 */

router.route("/id/:id").get(getByID);

module.exports = router;
