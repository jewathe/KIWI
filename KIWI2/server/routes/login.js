import { getLogin, deleteLogin, createLogin } from '../controller/login.js'
import express from 'express'
const router = express.Router()

/* READ */

// router.get('/', getLogin)
router.get('/:email', getLogin)
/* CREATE */
router.post('/', createLogin)
/* UPDATE */

/* DELETE */
router.delete('/:id', deleteLogin)

export default router
