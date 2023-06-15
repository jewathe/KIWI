import React from 'react'
import '../css/style.css'

const FormComponent = ({ children, action, onSaveClick, onCancelClick }) => (
    <div class='recipeFormContainer'>
        <form class='addRecipe' action={action}>
            {children}
            <button onClick={onSaveClick}>Sauvegarder</button>
            <button onClick={onCancelClick}>Annuler</button>

        </form>

    </div>
)

export default FormComponent
