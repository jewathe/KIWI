import { createFavorite, getFavorites } from '../controller/favorite.js'
import express from 'express'
const router = express.Router()

/* READ */

/* CREATE */
router.post('/', createFavorite)
/* UPDATE */

/* DELETE */
router.get('/', getFavorites)

export default router
