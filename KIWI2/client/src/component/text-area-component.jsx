import React from 'react'

const TextAreaComponent = ({ name, label, onChange, value }) => (
    <div>
        <label style={{ display: 'inline-block', width: '220px', textAlign: 'left' }} htmlFor={name}>{label}</label>
        <textarea style={{ height: '120px' }} name={name} id={name} onChange={onChange} value={value} />
    </div>
)

export default TextAreaComponent
