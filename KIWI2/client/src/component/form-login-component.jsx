import React from 'react'

const FormLoginComponent = ({ children, action, onSaveClick }) => (
    <div style={{ border: '2px solid white', margin: '3px', textAlign: 'center', borderRadius: '5px' }}>
        <form action={action}>
            {children}
        </form>

        <button style={{ marginRight: '30px' }} onClick={onSaveClick}>Connexion</button>
    </div>
)

export default FormLoginComponent
