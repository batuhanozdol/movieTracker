import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import AppRouter from "./AppRouter.js";
import "./App.css";
import Navbar from "./Navbar.js";


//import Button from './buton.js';

//var element = <div style={styleObj}> Area is : {calculate(length,width)}</div>

//var element2=<p style={styleObj}>{item.name} : $ {item.price}</p>

/*function HelloWorld(props) {
    return <h1>Message:{props.message}</h1>
}
function Hey(props){
    return <h1>Value:{props.ar[props.index]}</h1>
}*/

/*var html = <div> 
<h4>Welcome to React Transportation</h4>The best place to buy vehicles online <br/>
<h4>Choose Options</h4> New Only <input type="checkbox" name="box"></input><br/>
Select Type <select>
  <option value="volvo">Convertibles</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select> <br/><br/>
Cars
</div>*/

/*const vehicles = [
    {
        title:'cars',
        items: [
            {
                year:2013,
                model:'A',
                price : 32000
            }
        ]
    },
    {
        title:'trucks',
        items: [
            {
                year:2014,
                model :'E',
                price:5200
            }
        ]
    }
] 

function VehicleType(props) {
    const vehicles = props.vehicles;
    const vehicle = vehicles.items.map((vehicle)=> <Vehicle data={vehicle} /);
    return (<> <p> {vehicles.title}</p>
        {vehicle}<>)
}

function Vehicle(props) {
    return <table> </table>
}

vehicle = vehicles.map((vehicleType)=> <VehicleType vehicles= {vehiclesType}/>)
*/

/*const cars = {
    year: ["2013","2011","2016"],
    model: ["A","B","B"],
    price:["$32000","$4400","$15500"]
}
const trucks = {
    year: ["2014","2013"],
    model:["D","E"],
    price:["$18000","$5200"]
}

function Tablodoldur(props) {
    var doldur=[];
    for(let x=0;x<props.cars.year.length;x++){
        doldur.push(<TableCar cars={cars} y={x}/>)
    }
    return doldur;
}

function TableCar(props) {
    var index = props.y
    return  <div>
    <table border="4">
    <tr>
        <th>Year</th>
        <th>Model</th>
        <th>Price</th>
        <th>Buy</th>
    </tr>
    <tr>
      <td>{props.cars.year[index]}</td>
      <td>{props.cars.model[index]}</td>
      <td>{props.cars.price[index]}</td>
      <td><button type="button">Buy Now</button></td>
    </tr>
  </table> <br/>
  </div>
}

ReactDOM.render(
    <div> {html}
    <Tablodoldur cars={cars}/> <br/> Trucks <br/>
    <Tablodoldur cars={trucks}/>
    <Counter/>
    </div>
    , document.getElementById('root'));*/


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

class Controlled extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"",surname:"",email:"",password1:"",password2:"",result:"",sehir:""      
        }
        this.handleChange = this.handleChange.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
    }
   
    handleChange(event){
        if ( event.target.name=="onay"){
            this.setState({[event.target.name]:event.target.checked})
        }
        else if(event.target.name=="sehir"){
            if(this.state.sehir.includes(event.target.value)) {
                this.setState({[event.target.name]:this.state.sehir.replace(event.target.value,'')})
            }
            else {
            this.setState({[event.target.name]:event.target.value+" "+this.state.sehir})
            }
        }
        else{
            this.setState({[event.target.name]:event.target.value})

        }
        
    }
    clickHandler(){
        //console.log(this.state.username,this.state.password)
        if (this.state.password1 == this.state.password2 && this.state.onay && 
            (this.state.gender=="male" || this.state.gender=="female") && this.state.sehir ) {
            console.log(this.state.name,this.state.surname,this.state.email,this.state.password1,this.state.onay,this.state.sehir,this.state.gender)
            this.setState({result:"başarılı"});
        }    
        else {
            this.setState({result:"başarısız"});
        }
    }
    render(){
        return (<div> Name:<br/> <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /> <br/>
        Surname:<br/> <input type="text" name="surname" value={this.state.surname} onChange={this.handleChange} /> <br/>
        Email:<br/> <input type="text" name="email" value={this.state.email} onChange={this.handleChange} /> <br/>
        Password:<br/> <input type="password" name="password1" value={this.state.password1} onChange={this.handleChange} /> <br/> 
        Confirm password:<br/> <input type="password" name="password2" value={this.state.password2} onChange={this.handleChange} /> <br/>
        
        <input type="checkbox" name="onay" onChange={this.handleChange} />Okuduğumu onaylıyorum. <br/> 
        Şehir: <br/>
        
        <input type="checkbox" name="sehir" value="ankara" onChange={this.handleChange} />Ankara <br/> 
        <input type="checkbox" name="sehir" value="istanbul" onChange={this.handleChange} />İstanbul <br/> 
        <input type="checkbox" name="sehir" value="izmir" onChange={this.handleChange} />İzmir <br/> 
        <br/>
        Cinsiyet:<input type="radio" name="gender" value="male" onChange={this.handleChange}/>Erkek 
        
        <input type="radio" name="gender" value="female" onChange={this.handleChange}/>Kadın <br/> <br/>
        <button onClick={this.clickHandler}>Register</button> <br/>
        
        {this.state.result} 
        </div>
        )
    }
}/*
ReactDOM.render ( 
    <Carpim/>,document.getElementById("root")
)*/
ReactDOM.render(<div><Navbar></Navbar> <br/>
    <AppRouter/></div>,document.getElementById("root")
) 
/*ReactDOM.render( 
    <Controlled/>
    ,document.getElementById("root") 
)*/

serviceWorker.unregister();