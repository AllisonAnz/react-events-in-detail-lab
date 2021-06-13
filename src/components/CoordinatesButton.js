// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
    //takes in one prop: onReceivesCorrdinates which is a function passed down from index.js
    //render a button & onclick, create an array with two elements 
    //x and y coordinates of the mouse 
    //finde these using the event data and pass this event data in as 
    //the argument for the onReceiveCoordinates prop 
    //If successful, the current x,y position of your mouse should be logged 
    handleClick = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
        //=> [44, 50]
    }
    
    render(){
        return(
            <button onClick={this.handleClick}>Coords</button>
        )
    }
}

export default CoordinatesButton