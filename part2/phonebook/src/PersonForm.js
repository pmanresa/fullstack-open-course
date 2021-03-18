import React from 'react'

const InputForm = ({text, value, onChangeHandler}) => {
    return (
        <div>
            {text}:
            <input value={value} onChange={onChangeHandler} />
        </div>
    )
}

const PersonForm = (props) => {
    return (
        <form onSubmit={props.addPerson}>
            <InputForm 
                text="name" 
                value={props.newName}
                onChangeHandler={props.handleNameChange}
            />
            <InputForm 
                text="number" 
                value={props.newNumber}
                onChangeHandler={props.handleNumberChange}
            />
            <div>
                <button 
                type="submit" 
                disabled={props.newName === '' || props.newNumber === ''}
                >add</button>
            </div>
        </form>
    )
}

export default PersonForm;
