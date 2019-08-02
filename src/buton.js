import React from 'react'
import ReactDOM from 'react-dom'
class Button extends React.Component{
    render(){
        return(
            <button 
            style={{color:this.props.active?'red':'blue'}}
            onClick = {()=> {this.props.clickHandler(this.props.id,this.props.name)}}>
            {this.props.name}
            </button>
        )
    }
}
export default Button;