import React from 'react';
import {Link} from 'react-router-dom';
import "./App.css";
class UserDelete extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username:"",names:[]
        };
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    } 
    componentDidMount(){
        fetch('http://localhost:8082/findUsers', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        }).then(response=> response.json())
        .then(data=> {              
                if(data.error==undefined){
                   this.setState({names:data})
                }
            }).catch(error => {
                console.error(error);
            });
    }
    login(event) {
        fetch('http://localhost:8082/deleteUser',{
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username:this.state.username
        })
        },{ mode: 'no-cors'}).then(data=> {              
                if(data.error==undefined){
                    console.log("Success");
                    this.props.history.push("/admin");
                }
            }).catch(error => {
                console.error(error);
            });
       
    }
    handleChange(event){
        this.setState({username:event.target.value});   
    }
    //Type:<br/> <input type="radio" name="type" value="admin" onChange={this.handleChange}/>Admin 
    //<input type="radio" name="type" value="user" onChange={this.handleChange}/>User <br/> <br/>
    render() {
        return (    <div><h2> User Delete </h2> <br/>
            
            <select name="username" onChange={this.handleChange} > 
            <option selected="selected" key="" value="">Select </option>
            {this.state.names.map(mov => 
            <option name="username" key={mov.username} value={mov.username}>{mov.username}</option>)}
            </select>
            
            <br></br><br/>


            <button className="button button1" type="button" onChange={this.handleChange} onClick = {this.login}>
                Delete
            </button> 
            <Link to="/admin"> <button className="button button1" type="button">
            Go to homepage
        </button></Link> 
            </div>
        )
    }
}
export default UserDelete;