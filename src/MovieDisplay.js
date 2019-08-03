import React from 'react';
import {Link} from 'react-router-dom';
import "./App.css";
class MovieDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movie:[],name:"",directorid:"",releaseDate:"",imdbRating:"",duration:"",genre:""
        };
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);

    } 
    login(event) {
        fetch('http://localhost:8082/displayMovies', {
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
                    this.setState({movie:data})
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
    return (    <div><h4> Director's Movie Displayer </h4>
        Director Name:<br/> <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /> 
        <button className="button1" type="button" onClick = {this.login}>
            Display
        </button><Link to="/admin"> <button className="button1" type="button">
            Go to homepage
        </button></Link>  <br/> <br/> 
        <table className="fl-table" border="6">
        <tbody>
            <tr>
                <th>Name</th>
                <th>directorid</th> 
                <th>releaseDate</th>
                <th>imdbRating</th>
                <th>duration</th>
                <th>genre</th>
        </tr>
             {this.state.movie.map(mov =>(<tr>
                 <td>{mov.name}</td>
            <td>{mov.directorid}</td>
            <td>{mov.releaseDate}</td>
            <td>{mov.imdbRating}</td>
            <td>{mov.duration}</td>
             <td>{mov.genre}</td>
             </tr>))}    
             </tbody>
             </table>
         </div>
    )
}
}
export default MovieDisplay;