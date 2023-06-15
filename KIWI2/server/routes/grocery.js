import { createGrocery, getGroceries } from '../controller/grocery.js'
import express from 'express'
const router = express.Router()

/* READ */
router.get('/', getGroceries)
/* CREATE */
router.post('/', createGrocery)
/* UPDATE */

/* DELETE */

export default router
