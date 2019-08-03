import React from 'react';
import {Link} from 'react-router-dom';

class DirectorDelete extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"",names:[]  
        };
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);

    } 
    componentDidMount(){
        fetch('http://localhost:8082/findDirectors', {
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
        fetch('http://localhost:8082/deleteDirector', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name:this.state.name
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
        this.setState({name:event.target.value});   
    }
    //Type:<br/> <input type="radio" name="type" value="admin" onChange={this.handleChange}/>Admin 
    //<input type="radio" name="type" value="user" onChange={this.handleChange}/>User <br/> <br/>
    render() {
        return (    <div><h2> Director Delete </h2> <br/>
      <select name="name" onChange={this.handleChange} > 
            <option selected="selected" key="" value="">Select </option>
    {this.state.names.map(mov => 
            <option name="name" key={mov.name} value={mov.name}>{mov.name}</option>)}
            </select> <br/>
            <button  class="button button1" type="button" onClick = {this.login}>
                Delete
            </button>
            <Link to="/admin"> <button  class="button button1" type="button">
            Go to homepage
        </button></Link>
            </div>
        )
    }
}
export default DirectorDelete;