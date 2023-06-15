import React from 'react'
import '../css/style.css'

function renderOptions (options) {
    const resultat = options.map((option, index) => {
        return <option key={option.id} value={option.id}>  {option.name}  </option>
    })

    return resultat
}
const SelectComponent = ({ id, name, label, options, onChange }) => (
    <div class='selectIngredientCompo'>
        <label htmlFor={id}>{label}</label>
        <select onChange={onChange} id={id} name={name}>
            {renderOptions(options)}
        </select>
    </div>

)

export default SelectComponent
