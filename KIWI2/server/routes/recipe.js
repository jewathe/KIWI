import { getRecipes, deleteRecipe, getRecipe, createRecipe } from '../controller/recipe.js'
import express from 'express'
import { getLikes } from '../controller/like.js'
import { getJoin /* createJoin */ } from '../controller/join.js'

// import { getSteps, createStep } from '../controller/step.js'
const router = express.Router()

/* READ */
/// router.get('/:id/steps', getSteps)
router.get('/:id/likes', getLikes)
router.get('/:id/joins', getJoin)
router.get('/', getRecipes)
router.get('/:id', getRecipe)
/* CREATE */
router.post('/', createRecipe)
// router.post('/:id/steps', createStep)
// router.post('/:id/ingredients', createJoin)
/* UPDATE */

/* DELETE */
router.delete('/:id', deleteRecipe)
// router.delete('/:id/ingredients', deleteIngredients)
// router.delete('/:id/ingredients/:ingredientId', deleteIngredient)

export default router
