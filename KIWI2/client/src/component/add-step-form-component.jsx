import React from 'react'

const AddStepFormComponent = ({ children, action, onAddClick, onCancelClick, onSaveClick }) => (
    <div style={{ border: '2px solid white', margin: '3px', textAlign: 'center', borderRadius: '5px' }}>
        <form action={action}>
            {children}
        </form>

        <button style={{ marginRight: '30px' }} onClick={onSaveClick}>Ajouter</button>
        <button onClick={onCancelClick}>Annuler</button>
    </div>
)

export default AddStepFormComponent
