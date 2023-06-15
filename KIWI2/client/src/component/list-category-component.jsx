import React from 'react'

function renderLi (category, onItemClick, onItemDeleteClick) {
    return (
        <div style={{ height: '80px', width: '300px', display: 'inline-block', border: '2px solid black', margin: '3px', textAlign: 'center', borderRadius: '5px' }} key={category.id} id={category.id} title={'ID:' + category.id}>
            <span onClick={onItemClick}>
                <strong>{category.name}</strong> :  {category.description}
            </span>
            <button onClick={onItemDeleteClick}>X</button>
        </div>
    )
}

const ListCategoryComponent = ({ categories, onItemClick, onItemDeleteClick, onAddClick, onAddClick1 }) => (
    <div style={{ width: '100%', textAlign: 'center' }}>

        {categories.map((category) => renderLi(category, onItemClick, onItemDeleteClick))}

    </div>
)

export default ListCategoryComponent
