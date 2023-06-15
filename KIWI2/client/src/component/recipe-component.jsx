import React, { useState } from 'react'
import '../css/style.css'
import StarRating from './StarRating'
import CommentSystem from './CommentSystem'
import LikeButton from './LikeButton'

function renderLi (ingredient, onCancelClick) {
    return (
        <div class='detailsIngredient'>
            <ul key={ingredient.id}>
                <li>{ingredient.name + ' ' + ':' + ' ' + ingredient.quantity + ' g'}</li>
            </ul>
        </div>

    )
}

function RecipeComponent ({ onClick, ingredients, onAddIngredientClick, onSaveClickFavorite, onSaveClickGrocery }) {
    console.log('Dans une recette ' + ingredients)

    // rating stars
    const [rating, setRating] = useState(0)

    const handleRate = (newRating) => {
        setRating(newRating)
    }
    // comments
    /* const CommentSection = ({ onCommentSubmit }) => {
    const [comment, setComment] = useState('');

    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      if (comment.trim() === '') return;

    // const [cartItems, setCartItems] = useState([])
    /* const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item])
    }

     const handleAddToCart = () => {
        const newItem = { id: ingredients[1].recipe_id, img: ingredients[1].recipe_image, name: ingredients[1].recipe_name, desc: ingredients[1].recipe_description, timeprep: ingredients[1].preparation_time, timeCook: ingredients[1].cooking_time }
        addToCart(newItem)
    }

    const dataString = JSON.stringify(cartItems)
    localStorage.setItem('Lists', dataString)
    console.log(cartItems)
     */

    return (
        <div class='detailsRecette'>

            <div class='left'>
                {/* rating */}
                <h2>Rating: {rating}</h2>
                <StarRating rating={rating} totalStars={5} onRate={handleRate} />
                {/* rating */}
                <LikeButton />
                <img id='imageRecette' value={ingredients[1].recipe_id} src={ingredients[1].recipe_image} alt={'image ' + ingredients[1].recipe_name} />
                <ul id='etapeRecette'>
                    <li>{'Nom : ' + ingredients[1].recipe_name}</li>
                    <li>{'Description : ' + ingredients[1].recipe_description}</li>
                    <li>{'Temps de preparation : ' + ingredients[1].preparation_time + ' minutes'}</li>
                    <li>{'Temps de cuisson : ' + ingredients[1].cooking_time + ' minutes'}</li>
                </ul>
            </div>

            <div class='right'>
                <h4 id='titreIngredient'>Liste des ingredients</h4>

                {ingredients.map((ingredient) => renderLi(ingredient, onAddIngredientClick))}
                <div class='espaceComment'>
                    <h1>Commentaire</h1>
                    <CommentSystem />
                </div>
            </div>

            <div class='boutton'>
                <input type='button' value='Ajouter ingredients' id={ingredients[1].recipe_id} onClick={onAddIngredientClick} />
                <input type='button' value='Ajouter à mes recettes favories' onClick={onSaveClickFavorite} />
                <input type='button' value="Ajouter à ma liste d'épicerie" onClick={onSaveClickGrocery} />
            </div>

            {/* <div>
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={comment}
                        onChange={handleCommentChange}
                        placeholder='Ajouter un commentaire...'
                    />
                    <button type='submit'>Envoyer</button>
                </form>
            </div> */}

        </div>

    )
}

export default RecipeComponent
