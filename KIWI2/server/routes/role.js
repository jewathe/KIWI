import { getRoles, deleteRole, createRole } from '../controller/role.js'
import express from 'express'
const router = express.Router()

/* READ */

router.get('/', getRoles)
/* CREATE */
router.post('/', createRole)

/* DELETE */
router.delete('/:id', deleteRole)

export default router
