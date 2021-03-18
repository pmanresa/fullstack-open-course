import React from 'react'

const Filter = (props) => {
    return (
        <div>
          Filter Contacts by Name: 
          <input 
            value={props.nameFilter} 
            onChange={props.handleNameFilterChange} />
        </div>
    )
}

export default Filter;
