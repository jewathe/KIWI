import React from 'react'

function renderLi (grocery) {
    return (
        <div class='listGrocerie' key={grocery.id} id={grocery.id} title={grocery.name}>

            <ul>
                <li><strong>{grocery.ingredient_name}</strong></li>
                <li>{grocery.quantity + ' g'}</li>
            </ul>
        </div>
    )
}

function GroceryListComponent ({ groceries }) {
    return (
        <>
            <h2 id='listeGrocerie'>Liste d'épicerie</h2>
            <div class='listeGroceries'>
                {groceries.map((grocery) => renderLi(grocery))}
            </div>
        </>
    )
}

export default GroceryListComponent
