import React from 'react'

const FormIngredientComponent = ({ children, action, onSaveClick, onCancelClick }) => (
    <div class='ingredientFormContainer'>
        <form class='addIngredient' action={action}>
            {children}
            <button onClick={onSaveClick}>Sauvegarder</button>
            <button onClick={onCancelClick}>Annuler</button>
        </form>

    </div>
)

export default FormIngredientComponent
