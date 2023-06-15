import React, {/* useState */ } from 'react'
import '../css/style.css'

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
            </div>

        </div>

    )
}

export default RecipeComponent
