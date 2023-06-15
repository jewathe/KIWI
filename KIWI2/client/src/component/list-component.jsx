import React, { useEffect, useState } from 'react'
// import Rating from '../component/Rating'
// import FavoriteIcon from '@mui/icons-material/Favorite'
// import Search from './Search'
import '../css/style.css'
// import { FaClipboardList } from 'react-icons/fa'

function renderLi (recipe, onItemClick, onItemDeleteClick, onAddIngredientClick, onButtonClick) {
    return (
        <div class='listeRecette' key={recipe.id} id={recipe.id} title={recipe.proposed_description}>
            <img id='imageRecette' value={recipe.id} src={recipe.image} alt='monImage' />
            <span>
                <strong>{recipe.proposed_title}</strong>
            </span>
            <input type='button' value='Détails' onClick={onItemClick} />
        </div>
    )
}

function ListComponent ({ recipes, onItemClick, onAddIngredientClick, onItemDeleteClick, onAddClick, onAddClick1 }) {
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredData, setFilteredData] = useState([])
    useEffect(() => {
        const results = recipes?.filter(item =>
            item?.proposed_title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredData(results)
    }, [recipes, searchTerm])
    return (
        <>
            <div class='searchBar'>
                <input
                    type='text'
                    placeholder='Search by name'
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
            <div class='listesRecettes'>

                {filteredData?.map((recipe) => renderLi(recipe, onItemClick, onItemDeleteClick, onAddIngredientClick))}
                {console.log('Recipes : ' + recipes)}

            </div>
        </>
    )
}

export default ListComponent
