import React from 'react';
import  { Redirect } from 'react-router-dom'

const sorular = [
    {
        index:0,
        soru: '5 x 10 = ',
        cevaplar : ["5","15","50","55"]
    },
    {
        index:1,
        soru: '6 x 0 = ',
        cevaplar : ["0","10","60","1"]
    }
] 

class Carpim extends React.Component {
    constructor(props) {
        super(props)
        this.state = {dogru:0,yanlis:0,score:0};
        this.clickHandler = this.clickHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        <div> 
        <input type="radio" name="soru" value="5" onChange={this.handleChange}/>5 <br/>
        <input type="radio" name="soru" value="15" onChange={this.handleChange}/>15 <br/>
        <input type="radio" name="soru" value="50" onChange={this.handleChange}/>50 <br/>
        <input type="radio" name="soru" value="55" onChange={this.handleChange}/>55 <br/>   
        <button onClick={this.clickHandler}>Kaydet</button> <br/>
        Dogru:{this.state.dogru}  Yanlis:{this.state.yanlis}      
        </div>
    }
    
    clickHandler() {
        if(this.state.soru == "50") {
            this.setState({dogru:this.state.dogru+1});
            /*this.setState((prevState,props) => {             
                return {dogru:prevState.counter+1};
            })*/
            
        }
        else {
            this.setState({yanlis:this.state.yanlis+1});
           /* this.setState((prevState,props) => {
            return {yanlis:prevState.counter+1};
        })*/
        }
    }
    handleChange(event) {
        this.setState({[event.target.name]:event.target.value})
    }
    render () {
        return this.componentDidMount();
    }
}
export default Carpim;