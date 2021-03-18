import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './Country'

const URL = 'https://restcountries.eu/rest/v2/all'

const Finder = (props) => {
  return (
      <div>
        Find Countries: 
        <input 
          value={props.query} 
          onChange={props.handleQueryChange} />
      </div>
  )
}

const FinderResults = (props) => {
  const matches = props.matches
  
  if (!matches) {
    return <div></div>
  } else if (matches.length > 10) {
    return (
      <div>Too many matches. Please be a bit more specific</div>
    )
  } else if ((matches.length <= 10) && (matches.length > 1)) {
    return (
      <ul>
        {matches.map(match => <li>{match.name}</li>)}
      </ul>
    )
  } else if (matches.length === 1) {
    return (
      <Country country={matches[0]} />
    )
  } else {
    return (
      <div>No countries found</div>
    )
  }
}

const App = () => {

  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])
  const [matches, setMatches] = useState(null)

  useEffect(() => {
    axios
      .get(URL)
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleQueryChange = (event) => {
    setQuery(event.target.value)
    updateMatches()
  }
  
  const updateMatches = () => {
    if (query === '') {
      setMatches(null)
    } else {
      const matches = countries.filter(country => country.name.toUpperCase().includes(query.toUpperCase()))
      setMatches(matches)
    }
  }

  return (
    <div>
      <Finder query={query} handleQueryChange={handleQueryChange} />
      <FinderResults matches={matches} />
    </div>
  );
}

export default App;
