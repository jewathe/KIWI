import React from 'react'

export default function Search ({ setSearchTerm, searchTerm }) {
    return (
        <div>
            <input
                type='text'
                placeholder='Search by name'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
        </div>
    )
}
