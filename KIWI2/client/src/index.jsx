
import React from 'react'
import { createRoot } from 'react-dom/client'

// import FormRecipeContainer from 'container/form-recipe-container'
import Home from 'container/home'
const container = document.getElementById('app')
const root = createRoot(container)
root.render(<Home />)
