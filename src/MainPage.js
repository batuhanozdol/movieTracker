import React from 'react';
import {Link} from 'react-router-dom';

class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username:"",password:"",type:"",result:""     
        };
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
        this.addAdmin = this.addAdmin.bind(this);
    }
    addAdmin(event) {

            fetch('http://localhost:8082/admin', {
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
            }).then(
                response=> response.json())    
                .then(data=> {                              
                        this.props.history.push("/");
                  
                }).catch(error => {
                    this.setState({result:"Can't added"});
                });
    }
    login(event) {
        fetch('http://localhost:8082/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
            //type: this.state.type
        })
        }).then(
            response=> response.json())    
            .then(data=> {
                if(data.error==undefined){
                    this.setState({result:"Success"});
                    if(data.token!=="user" ) {
                        this.props.history.push("/admin");
                    }
                    else{
                        this.setState({result:"  User not found !!! "});

                    }
                }
                else {
                    if(data.token) {
                        this.props.history.push("/user");
                    }
                    else {
                        this.setState({result:"  User not found !!! "});
                    }
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
        return (    <div style={{textAlign: 'center'}}><br/> <br/><h2 style={{color:"white"}}> Login Page</h2> <br/> <br/> 
            Name:<br/> <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /> <br/>
            Password:<br/> <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /> <br/> 
            <br/><button className="button button1" type="button" onClick = {this.login}>
                Login
            </button>
            {this.state.result}
            <br/><br/><br/><br/><br/>
            <button type="button" className="button button1" onClick = {this.addAdmin}>Add admin</button>
            <br/> 
            
            </div>
        )
    }
}
    


export default MainPage;