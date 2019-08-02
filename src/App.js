import React from 'react';
import logo from './logo.svg';
import './App.css';
import ControlledInput from './counter.js';

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {activeArray:[0,0],details:'details'}
      this.clickHandler = this.clickHandler.bind(this)
  }
}
  /*clickHandler(id,details){
      var arr  = [0,0]
      arr[id]=1
      this.setState({activeArray:arr,details:'details'})
  
  }
  render(){
      return (
        <div>
          <Button id={0} active = {this.state.activeArray[0]} clickHandler = {this.clickHandler}
   name="bob"/>
          <Button id={1} active = {this.state.activeArray[1]} clickHandler = {this.clickHandler}
   name="joe"/>
          </div>
      )
  }*/

export default App;
