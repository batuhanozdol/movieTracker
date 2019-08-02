import React from 'react'
import ReactDOM from 'react-dom'

/*class Button extends React.Component{
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
export default Button;*/
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {counter:0}
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
        const counterStart = this.props.match.params.counter;
        if(counterStart){
            this.setState({counter:parseInt(counterStart)});
        }
    }
    handleClick() {
        this.setState((prevState,props) => {
            return {counter:prevState.counter+1};
        })
    }
    /*handleChange(event){
        this.setState({value:event.target.value})
    }*/
    render(){
        return ( <button
        onClick={this.handleClick}> Increment ({this.state.counter})</button>);
    }
}
export default Counter;



