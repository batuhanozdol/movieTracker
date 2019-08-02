import React from 'react';
import {Link} from 'react-router-dom';
class UserAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username:"",password:"",type:""     
        };
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    } 
    
    login(event) {
        fetch('http://localhost:8082/addUser', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
            type: this.state.type
        })
        }).then(data=> {              
                if(data.error==undefined ){
                    console.log("Success");
                    this.props.history.push("/admin");
                }
            }).catch(error => {
                console.log(error);
            });
    }

    handleChange(event){
            this.setState({[event.target.name]:event.target.value});   
    }

    render() {
        return (    <div><h2> User Add </h2> <br/>
            Username:<br/> <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /> <br/>
            Password:<br/> <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /> <br/>
            Type:<br/> <input type="radio" name="type" value="admin" onChange={this.handleChange} checked/>Admin 
            <input type="radio" name="type" value="user" onChange={this.handleChange}/>User <br/> <br/>
            <button className="button button1" type="button" onClick = {this.login}>
                Add
            </button>
            <Link to="/admin"> <button className="button button1" type="button">
            Go to homepage
        </button></Link> 
            </div>
        )
    }
}
export default UserAdd;