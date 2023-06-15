import { getGroceriesDetails } from '../controller/groceries_details.js'
import express from 'express'
const router = express.Router()

/* READ */
router.get('/', getGroceriesDetails)

export default router
