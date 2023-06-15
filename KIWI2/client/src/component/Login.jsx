import React from 'react'
const Login = ({ children, action, onConnectClick, onClick }) => (
    <div class='center'>
        <form class='formConnexion' action={action}>
            {children}

        </form>

        <button onClick={onConnectClick}>Connecter</button>
        <button id='signup' onClick={onClick}>Créer  compte</button>
    </div>
)

export default Login
