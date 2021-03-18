import React from 'react'
import Person from './Person'


const Persons = ({persons, setRequestData}) => {
    return (
        <ul>
            {persons.map(person => 
            <Person 
                key={person.id} 
                id={person.id}
                name={person.name}
                number={person.number}
                setRequestData={setRequestData}
            />
            )}
        </ul>
    )
}

export default Persons;
