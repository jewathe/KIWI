import React, { useState } from 'react'
import RecipeContext from './Context.js'
export default function RecipeProvider ({ children }) {
    const [cartInfo, setCartInfo] = useState([1, 2, 3, 4])

    // add to the list
    const addtoList = (item) => {
        const IsExist = cartInfo.find((card) => card.id === item.id)
        if (IsExist) {
            setCartInfo(cartInfo.map((cardItem) => cardItem.id === item.id ? item : cardItem))
        } else {
            setCartInfo((prev) => [...prev, item])
        }
        if (item.quantity === 0) {
            setCartInfo(cartInfo.filter((itemc) => itemc.id !== item.id))
        }
    }
    // remove from the list
    const removeFromList = (id) => {
        const item = cartInfo.filter((item) => item.id !== id)

        setCartInfo(item)
    }
    return (
        <RecipeContext.Provider value={{ addtoList, cartInfo, CartInfoLength: cartInfo.length, removeFromList }}>
            {children}
        </RecipeContext.Provider>
    )
}
