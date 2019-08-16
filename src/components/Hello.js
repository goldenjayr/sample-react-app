// import react for Babel to convert JSX to javascript format
import React from 'react'

// this is a functional component
// props are passed in from the App.js
const Hello = (props) => {
    return (
        <div>Hello {props.firstname} {props.lastname} | Age: {props.age}</div>
    )
}

export default Hello