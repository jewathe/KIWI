import { getUsers, getUser, createUser } from '../controller/user.js'
import express from 'express'
const router = express.Router()

/* READ */
router.get('/', getUsers)
router.get('/:email', getUser)
/* CREATE */
router.post('/', createUser)

export default router
