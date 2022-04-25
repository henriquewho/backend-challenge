const datesRouter = require('express').Router();  
const {getDates} = require('../controllers/dates'); 

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
 *      Dates:
 *          type: object
 *          required: 
 *              - success
 *              - data
 *          properties: 
 *              success:
 *                  type: boolean
 *                  description: Success or not of the operation
 *              data: 
 *                  type: array
 *                  items: 
 *                      type: string
 *                      description: Each date
 *                  description: Array of dates
 */

/**
 * @swagger
 * tags:
 *  name: Dates
 *  description: Routes for cases (counter and cumulative) requests
 */

/** 
 * @swagger
 * /dates: 
 *  get:
 *      description: Use it to request the list of cases by country in a day
 *      tags: [Dates]
 *      responses: 
 *          '200': 
 *              description: Successfull response, returns with array of dates 
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/Dates'
 *          '500': 
 *              description: Error while querying for the data in the database
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/DatabaseError'
 */

datesRouter.get('/', getDates);

module.exports = datesRouter; 