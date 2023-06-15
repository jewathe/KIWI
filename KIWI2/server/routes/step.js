import { getStep, createStep } from '../controller/step.js'
import express from 'express'
const router = express.Router()

/* READ */

router.get('/:id', getStep)

/* CREATE */
router.post('/', createStep)
/* UPDATE */

/* DELETE */

export default router
