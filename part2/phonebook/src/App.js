import React, { useState, useEffect } from 'react'
import Persons from './Persons'
import PersonForm from './PersonForm'
import Filter from './Filter'
import personService from './services/personService'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter ] = useState('')
  const [ requestData, setRequestData ] = useState(true)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        setRequestData(false)
      })
      .catch(error => {
        console.log("Error when loading person data: ", error);
        
      })
  }, [requestData])
  
  const addPerson = (event) => {
    event.preventDefault()
    const alreadyExists = persons.some(person => person.name === newName)
    
    if (alreadyExists){
      const confirmed = window.confirm(`${newName} is already added to phonebook, replace the old nunber with a new one?`);
      
      if (confirmed) {
        const person = persons.find(p => p.name === newName)
        const changedPerson = { ...person, number: newNumber }
        personService
          .update(person.id, changedPerson)
          .then(updatedPerson => {
            setPersons(persons.map(p => p.id !== updatedPerson.id ? p : updatedPerson))
          })
          .catch(error => {
            console.log(`Error when updating Person ${person.id}: ${error}`);
          })
      }
    
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          console.log(error);
        })
    }
  }

  const personsToShow = nameFilter === ''
    ? persons
    : persons.filter(person => person.name.toUpperCase().includes(nameFilter.toUpperCase()))

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter 
        value={nameFilter}
        handleNameFilterChange={handleNameFilterChange}
      />
      <h2>Add Contact</h2>
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} setRequestData={setRequestData}/>
    </div>
  )
}

export default App