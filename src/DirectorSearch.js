import React from 'react';
import {Link} from 'react-router-dom';
import "./App.css";
class DirectorSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users:[],name:"",surname:"",birthDate:"",birthPlace:""  
        };
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    } 
    login(event) {
        fetch('http://localhost:8082/searchDirectors', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: this.state.name
        })
        }).then(
            response=> response.json())    
            .then(data=> {              
                if(data.error==undefined){
                    this.setState({users:data})
                }
            }).catch(error => {
                console.error(error);
            });
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value});   
    }
  
    
//Type:<br/> <input type="radio" name="type" value="admin" onChange={this.handleChange}/>Admin 
//<input type="radio" name="type" value="user" onChange={this.handleChange}/>User <br/> <br/>
render() {
    return (    <div><h4> Search Director </h4>
        Director Name:<br/> <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /> 
        <button  className="button1" type="button" onClick = {this.login}>
            Display
        </button> <Link to="/admin"> <button  className="button1" type="button">
            Go to homepage
        </button></Link> <br/> <br/> 
        <table className="fl-table" border="6">
        <tbody>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Birthdate</th>
                <th>birthPlace</th> 
        </tr>
             {this.state.users.map(mov =>(<tr>
                 <td>{mov.name}</td>
            <td>{mov.surname}</td>
            <td>{mov.birthDate}</td>
            <td>{mov.birthPlace}</td>
             </tr>))}    
             </tbody>
             </table>
         </div>
    )
}
}
export default DirectorSearch;