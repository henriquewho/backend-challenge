const casesRouter = require('express').Router();
const {getCasesByDay, getCumulativeCases} = require('../controllers/cases');
const middleware = require('../utils/middleware');

/**
 * @swagger
 * components: 
 *  schemas: 
 *      DatabaseError: 
 *          type: object
 *          required: 
 *              - success
 *              - msg
 *              - err
 *          properties: 
 *              success:
 *                  type: boolean
 *                  default: false
 *                  description: Success or not of the operation
 *              msg: 
 *                  type: string
 *                  description: Message informing about the error while querying
 *              err: 
 *                  type: error
 *                  description: Error returned by the database
 *      Message: 
 *          type: object
 *          required: 
 *              - success
 *              - msg
 *          properties: 
 *              success:
 *                  type: boolean
 *                  default: false
 *                  description: Success or not of the operation
 *              msg: 
 *                  type: string
 *                  description: Message informing about the expected date formating
 *      Cases:
 *          type: object
 *          required: 
 *              - success
 *          properties: 
 *              success:
 *                  type: boolean
 *                  description: Success or not of the operation
 *              data: 
 *                  type: array
 *                  items: 
 *                      type: object
 *                      properties:
 *                          _id: 
 *                              type: string
 *                          variants:
 *                              type: array
 *                              description: Array with list of variants with the counted cases
 *                              items:
 *                                  type: object
 *                                  properties: 
 *                                      variant: 
 *                                          type: string
 *                                      total: 
 *                                          type: integer
 *                  description: Array of countries with the counted cases
 *              msg: 
 *                  type: string
 *                  description: Message informing that/if the return is empty
 */

/**
 * @swagger
 * tags:
 *  name: Cases
 *  description: Routes for cases (counter and cumulative) requests
 */

/** 
 * @swagger
 * /cases/{date}/counter: 
 *  get:
 *      description: Use it to request the list of cases by country in a day
 *      tags: [Cases]
 *      parameters: 
 *          - in: path
 *            name: date
 *            schema: 
 *              type: string
 *            required: true
 *            description: The specific date to query for
 *      responses: 
 *          '200': 
 *              description: Successfull response, returns with data or empty if no cases are found on that date 
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/Cases'
 *          '400': 
 *              description: Invalid request, date format is invalid
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/Message'
 *          '500': 
 *              description: Error while querying for the data in the database
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/DatabaseError'
 */

/** 
 * @swagger
 * /cases/{date}/cumulative: 
 *  get:
 *      description: Use it to request the list of cumulative cases by country
 *      tags: [Cases]
 *      parameters: 
 *          - in: path
 *            name: date
 *            schema: 
 *              type: string
 *            required: true
 *            description: The specific date to query for
 *      responses: 
 *          '200': 
 *              description: Successfull response, returns with data or empty if no cases are found on that date 
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/Cases'
 *          '400': 
 *              description: Invalid request, date format is invalid
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/Message'
 *          '500': 
 *              description: Error while querying for the data in the database
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/DatabaseError'
 */

casesRouter.get('/:date/counter', middleware.checkDate, getCasesByDay);
casesRouter.get('/:date/cumulative', middleware.checkDate, getCumulativeCases);

module.exports = casesRouter;