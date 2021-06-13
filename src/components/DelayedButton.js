// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {
    //takes two props: onDelayedClick(a function) and delay(a number)
    //create a button, on click will pass the click event to the 
    //onDelayedClick prop within a setTime() 
    //The setTimeout() should be set to this.props.delay 
    //If successful, the event will be logged to the console once the timeout has finsished 
    handleClick = event => {
        event.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
        //=> Class {dispatchConfig: {…}, _targetInst: FiberNode, nativeEvent: MouseEvent, type: "click", target: button, …}

    }

    render(){
        return(
            <button onClick={this.handleClick}>Delayed</button>
        )
    }
}

export default DelayedButton