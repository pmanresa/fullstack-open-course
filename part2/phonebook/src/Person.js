import React from 'react'
import personService from './services/personService'

const Person = ({id, name, number, setRequestData}) => {
  const deletePerson = ({id, name}) => {
    const confirmed = window.confirm(`Are you sure you want to delete person ${name}?`)

    if (confirmed) {
      personService
          .deleteEntry(id)
          .then(
              setRequestData(true)  // request data to be reloaded by useEffect hook
          )
          .catch(error => {
              console.log(`Error when deleting entry with ${id}: ${error}`)
          }) 
      }
  } 

  return (
    <li>
      {name} - {number}
      <button onClick={() => deletePerson({id, name})}>delete</button>
    </li>
  )
}

export default Person;
