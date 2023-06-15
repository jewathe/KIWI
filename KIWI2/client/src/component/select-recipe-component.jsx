import React from 'react'

function renderOptions (options) {
    console.log(options)
    const resultat = options.map((option, index) => {
        return <option key={option.id} value={option.id}>  {option.proposed_title}  </option>
    })

    return resultat
}
const SelectRecipeComponent = ({ id, name, label, options, onChange }) => (
    <div>
        <label style={{ display: 'inline-block', width: '232px', textAlign: 'left' }} htmlFor={id}>{label}</label>
        <select style={{ width: '150px' }} onChange={onChange} id={id} name={name}>
            {renderOptions(options)}
        </select>
    </div>

)

export default SelectRecipeComponent
