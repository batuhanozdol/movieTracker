import React from 'react';
import {Link} from 'react-router-dom';
import "./App.css";

class MovieAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            names:[],id:"",name:"",directorid:"",releaseDate:"",imdbRating:"",duration:"",genre:""     
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
    login(event) {
        fetch('http://localhost:8082/addMovie', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: this.state.name,
            directorid: this.state.directorid,
            releaseDate: this.state.releaseDate,
            imdbRating: this.state.imdbRating,
            duration: this.state.duration,
            genre: this.state.genre
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
    return (    <div><h2> Movie Add </h2> <br/>
        Name:<br/> <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /> <br/>
        Director ID:<br/>
        <select name="directorid" onChange={this.handleChange} > 
        <option defaultValue={'DEFAULT'} value="">Select</option> 
        {this.state.names.map(mov => 
            <option key={mov.id} value={mov.id}>{mov.id}</option>)}
        </select> <br/>
        
        ReleaseDate:<br/> <input type="date" name="releaseDate" value={this.state.releaseDate} onChange={this.handleChange} /> <br/>
        Rating:<br/> <input type="text" name="imdbRating" value={this.state.imdbRating} onChange={this.handleChange} /> <br/>
        Duration:<br/> <input type="text" name="duration" value={this.state.duration} onChange={this.handleChange} /> <br/>
        Genre:<br/> <input type="text" name="genre" value={this.state.genre} onChange={this.handleChange} /> <br/>
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
export default MovieAdd;