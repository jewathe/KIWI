import React from 'react'

const FormSigupComponent = ({ children, action, onSaveClick, onCancelClick }) => (
    <div style={{ border: '2px solid white', margin: '3px', textAlign: 'center', borderRadius: '5px' }}>
        <form action={action}>
            {children}
        </form>

        <button id='login' style={{ marginRight: '30px' }} onClick={onSaveClick}>Sauvegarder</button>
        <button onClick={onCancelClick}>Annuler</button>
    </div>
)

export default FormSigupComponent
