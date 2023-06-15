import React from 'react'
import ListEpicerie from '../component/ListEpicerie'
export default function Cart ({ cartItems }) {
    return (
        <div>
            <ListEpicerie cartItems={cartItems} />
        </div>
    )
}
