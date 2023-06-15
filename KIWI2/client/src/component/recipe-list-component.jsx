import React from 'react'
import '../css/style.css'

function renderLi (recipe) {
    return (
        <div class='mesRecettes' key={recipe.id} id={recipe.id} title={recipe.proposed_description}>
            <img value={recipe.id} src={recipe.recipe_image} alt={recipe.recipe_name} />
            <ul>
                <li><strong>{recipe.recipe_name}</strong></li>
                <li>{'Nombre de portions : ' + recipe.portions}</li>
            </ul>
        </div>
    )
}

function RecipeListComponent ({ recipes }) {
    return (
        <>
            <div class='mesRecipes'>
                {recipes.map((recipe) => renderLi(recipe))}
            </div>
        </>
    )
}

export default RecipeListComponent
