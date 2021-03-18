import React from 'react'

const Language = ({name}) => {
    return (
        <li>{name}</li>
    )
}

const Languages = (props) => {
    return (
        <div>
            <h2>Languages</h2>
            <div>
                <ul>
                    {props.languages.map(language => 
                    <Language key={language.name} name={language.name} />
                    )}
                </ul>
            </div>
        </div>
    )
}

const Country = (props) => {
    const name = props.country.name
    const capital = props.country.capital
    const population = props.country.population
    const languages = props.country.languages
    const imgFlag = props.country.flag

    return (
        <div>
            <h1>{name}</h1>
            <div>Capital: {capital}</div>
            <div>Population: {population}</div>
            <Languages languages={languages} />
            <div>
                <img src={imgFlag} alt="country-flag"/>
            </div>
        </div>
    )
}

export default Country
