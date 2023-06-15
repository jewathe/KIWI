import { createLike, deleteLikeByUserAndRecipe } from '../controller/like.js'
import express from 'express'
const router = express.Router()

/* READ */

/* CREATE */
router.post('/', createLike)
/* UPDATE */

/* DELETE */
router.delete('/:recipeId/:userId', deleteLikeByUserAndRecipe)

export default router
