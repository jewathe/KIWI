import React from 'react'
// import ImageIngredient from '../ImageIngredient'

function renderLi (ingredient, onItemClick) {
    return (
        <div class='listeIngredient' key={ingredient.id} id={ingredient.id} title={ingredient.name}>
            <img src={ingredient.image} alt={ingredient.name} />
            <strong style={{ position: 'relative', display: 'block' }}>{ingredient.name}</strong>
        </div>
    )
}

const ListIngredientComponent = ({ ingredients, onItemClick, onAddClick }) => (
    <div class='listesIngredients'>

        {ingredients.map((ingredient) => renderLi(ingredient, onItemClick))}

    </div>
)

export default ListIngredientComponent
