import React from 'react';
import {Link} from 'react-router-dom';

class MovieSearche extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            names:[],movies:[],id:"",name:"",directorid:"",releaseDate:"",imdbRating:"",duration:"",genre:""    
        };
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        } 
    componentDidMount(){
        fetch('http://localhost:8082/findMovies', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        }).then(
            response=> response.json())
            .then(data=> {              
                if(data.error==undefined){
                   this.setState({names:data})
                }
            }).catch(error => {
                console.error(error);
            });
    }
    login(event) {
        fetch('http://localhost:8082/searchMovie', {
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
                    this.setState({movies:data})
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
    return (    <div><h2> Take Movie Infos </h2> <hr/> <br/>
    <select name="name" onChange={this.handleChange}> 
        <option key="" value="">Select</option>
        {this.state.names.map(mov => 
        <option key={mov.id} value={mov.name}>{mov.name}</option>)}
    </select> <br/> <br/><br/><br/>
        <button className="button button1" type="button" onClick = {this.login}>
        Search
        </button>
        <Link to="/user">
        <button className="button button1" type="button">
            To homepage
        </button>
        </Link>
        <br/><br/>
        <table className="fl-table" border="6">
        <tbody key="tbody">
            <tr>
                <th>Name</th>
                <th>directorid</th>
                <th>releaseDate</th>
                <th>imdbRating</th> 
                <th>duration</th> 
                <th>genre</th> 

        </tr>
             {this.state.movies.map(mo =>(<tr key={mo.name}>
                    <td>{mo.name}</td>
                    <td>{mo.directorid}</td>
                    <td>{mo.releaseDate}</td>
                    <td>{mo.imdbRating}</td>
                    <td>{mo.duration}</td>
                    <td>{mo.genre}</td>
             </tr>))}    
             </tbody>
             </table>
        </div>
    )
}
}
export default MovieSearche;