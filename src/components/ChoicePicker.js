import React, {useState} from 'react'

export default function ChoicePicker() {
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(`A choice was submitted: ${value}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Pick your favorite sport:
                <select value={value} onChange={handleChange}>
                    <option value={"boxing"}>Boxing</option>
                    <option value={"basketball"}>Basketball</option>
                    <option value={"golf"}>Golf</option>
                    <option value={"tennis"}>Tennis</option>
                    <option value={"wrestling"}>Wrestling</option>
                    <option value={"football"}>Football</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}
