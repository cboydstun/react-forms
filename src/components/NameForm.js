import React, {useState} from 'react'

export default function NameForm() {
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(`A name was submitted: ${value}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <input type="submit" />
        </form>
    )
}
