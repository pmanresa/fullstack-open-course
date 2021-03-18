import React from 'react'
import Person from './Person'

const Persons = (props) => {
    return (
        <ul>
            {props.persons.map(person => 
            <Person key={person.name} person={person} />
            )}
        </ul>
    )
}

export default Persons;
