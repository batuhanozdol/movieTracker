import React from 'react';
import {Link} from 'react-router-dom';

class DirectorAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"",surname:"",birthDate:"",birthPlace:""     
        };
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);

    } 
    login(event) {
        fetch('http://localhost:8082/addDirector', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: this.state.name,
            surname: this.state.surname,
            birthDate: this.state.birthDate,
            birthPlace: this.state.birthPlace
        })
        }).then(data=> {              
                if(data.error==undefined){
                    console.log("Success");
                    this.props.history.push("/admin");
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
        return (    <div><h2> Director Add </h2> <br/>
            Name:<br/> <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /> <br/>
            Surname:<br/> <input type="text" name="surname" value={this.state.surname} onChange={this.handleChange} /> <br/>
            BirthDate:<br/> <input type="date" name="birthDate" value={this.state.birthDate} onChange={this.handleChange} /> <br/>
            BirthPlace:<br/> <input type="text" name="birthPlace" value={this.state.birthPlace} onChange={this.handleChange} /> <br/>
            <button  className="button button1" type="button" onClick = {this.login}>
                Add
            </button>
            <Link to="/admin"> <button  className="button button1" type="button">
            Go to homepage
        </button></Link>
            </div>
        )
    }
}
export default DirectorAdd;