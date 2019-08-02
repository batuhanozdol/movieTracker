import React from 'react';
import {Link} from 'react-router-dom';

class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            names:[],name:"",directorid:"",releaseDate:"",imdbRating:"",duration:"",genre:""    
        };
        this.login = this.login.bind(this);
        
    } 
    login(event) {
        fetch('http://localhost:8082/listMovies', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        }).then(
            response=> response.json())
            .then(data=> {              
                if(data.error==undefined){
                    this.setState({names:data});
                }
            }).catch(error => {
                console.error(error);
            });
    }
  
//Type:<br/> <input type="radio" name="type" value="admin" onChange={this.handleChange}/>Admin 
//<input type="radio" name="type" value="user" onChange={this.handleChange}/>User <br/> <br/>
render() {
    return (    <div><h2> Movies </h2> 
    <button type="button" className="button button1" onClick={this.login}> List </button>
    
    <Link to="/user"> <button className="button button1" type="button">
    Go to homepage
    </button></Link> <br/>
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
            {this.state.names.map(mov =>(<tr key={mov.id}>
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
export default MovieList;