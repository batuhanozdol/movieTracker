import React from 'react';
import {Link} from 'react-router-dom';
import "./App.css";
class UserSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users:[],username:"",password:"",type:""
        };
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    } 
    login(event) {
        fetch('http://localhost:8082/searchUsers', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: this.state.username
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
    return (    <div><h4> Search User </h4>
        User Name:<br/> <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /> 
        <button className="button1" type="button" onClick = {this.login}>
            Display
        </button> <Link to="/admin"> <button className="button1" type="button">
            Go to homepage
        </button></Link> <br/> <br/> <br/>
        <table className="fl-table" border="6">
        <tbody >
            <tr>
                <th>Userame</th>
                <th>Type</th> 
        </tr>
             {this.state.users.map(mov =>(<tr key={mov.username}>
                 <td>{mov.username}</td>
            <td>{mov.type}</td>
             </tr>))}    
             </tbody>
             </table>
         </div>
    )
}
}
export default UserSearch;