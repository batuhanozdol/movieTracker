import React from 'react';
import {Link} from 'react-router-dom';
import "./App.css";

class UserUpdate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            names:[],username:"",password:"",type:"",counter:""   
        };
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);

    } 
    componentDidMount(){
        const counterStart = this.props.match.params.counter;
        if(counterStart){
            this.setState({counter:parseInt(counterStart)});
        }
    }
    login(event) {
        fetch('http://localhost:8082/updateUser', {
        method: 'PUT',
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
                if(data.error==undefined){
    
                    console.log("Success");
                    this.props.history.push("/admin");
                }
            }).catch(error => {
                console.error(error);
            });
        this.setState((prevState,props) => {
            return {counter:prevState.counter+1};
        })
    }
    componentDidMount(){
        fetch('http://localhost:8082/findUsers', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        }).then(
            response=> response.json()).then(data=> {              
                if(data.error==undefined){
                   this.setState({names:data})
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
        return (    <div><h2> User Update </h2> Username:<br/>
            <select name="username" onChange={this.handleChange} >
            <option selected="selected" value="">Select </option>
             {this.state.names.map(mov => 
            <option key={mov.username} value={mov.username}>{mov.username}</option>)}
            </select> <br/>
            Password:<br/> <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /> <br/>
            Type:<br/> <input type="radio" name="type" value="admin" onChange={this.handleChange} checked/>Admin 
            <input type="radio" name="type" value="user" onChange={this.handleChange}/>User <br/> <br/>
            <button className="button button1" type="button" onClick = {this.login}>
                Update
            </button> <Link to="/admin"> <button className="button button1" type="button">
            Go to homepage
        </button></Link> 
            </div>
        )
    }
}
export default UserUpdate;