import React from 'react'
import '../css/style.css'

function renderLi (recipe) {
    return (
        <div class='listeRecetteFav' key={recipe.id}>
            <img id='imageRecette' value={recipe.id} src={recipe.image} alt='monImage' />
        </div>
    )
}

function FavoriComponent ({ recipes }) {
    return (
        <div>
            <h4 id='recetteFav'>LE MEILLEURE DE KIWI</h4>
            <div class='listesRecettesFav'>
                {recipes.map((recipe) => renderLi(recipe))}
            </div>
        </div>
    )
}

export default FavoriComponent
