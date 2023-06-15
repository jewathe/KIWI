import { getJoins, getJoin, createJoin, deleteJoin } from '../controller/join.js'
import express from 'express'
const router = express.Router()

/* READ */
router.get('/', getJoins)
router.get('/:id', getJoin)
/* CREATE */
router.post('/', createJoin)
/* UPDATE */

/* DELETE */
router.delete('/:id', deleteJoin)

export default router
