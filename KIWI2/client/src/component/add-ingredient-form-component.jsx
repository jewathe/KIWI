import React from 'react'

const AddIngredientFormComponent = ({ children, action, onAddClick, onCancelClick }) => (
    <div style={{ border: '2px solid white', margin: '3px', textAlign: 'center', borderRadius: '5px' }}>
        <form action={action}>
            {children}
        </form>

        <button style={{ marginRight: '30px' }} onClick={onAddClick}>Ajouter</button>
        <button onClick={onCancelClick}>Annuler</button>
    </div>
)

export default AddIngredientFormComponent
