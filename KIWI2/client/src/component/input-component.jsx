import React from 'react'

const InputComponent = ({ name, label, type, onChange, value }) => (
    <div>
        <label style={{ display: 'inline-block', width: '220px', textAlign: 'left' }} htmlFor={name}>{label}</label>
        <input style={{ margin: '10px' }} type={type} name={name} id={name} onChange={onChange} value={value} />
    </div>
)

export default InputComponent
