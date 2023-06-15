import { getCategories, deleteCategory, getCategory, createCategory } from '../controller/category.js'
import express from 'express'
const router = express.Router()

/* READ */

router.get('/', getCategories)
router.get('/:id', getCategory)
/* CREATE */
router.post('/', createCategory)
/* UPDATE */

/* DELETE */
router.delete('/:id', deleteCategory)

export default router
