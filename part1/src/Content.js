import React from 'react'

const Part = (props) => {
    return (
        <div>
            <p>{props.part} {props.exercises}</p>
        </div>
    )
}

const Content = (props) => {
    return (
        <Part part={props.part} exercises={props.exercises}/>
    )
}

export default Content;
