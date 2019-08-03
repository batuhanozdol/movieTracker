import React from 'react';
import {Link} from 'react-router-dom';
import "./App.css";
class MovieUpdate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            names:[],name:"",directorid:"",releaseDate:"",imdbRating:"",duration:"",genre:""   
        };
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);

    } 
 
    login(event) {
        fetch('http://localhost:8082/updateMovie', {
        method: 'PUT',
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
            genre:this.state.genre
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
        fetch('http://localhost:8082/findMovies', {
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
    return (    <div><h2> Movie Update </h2>Name: <br/>
        <select name="name" onChange={this.handleChange} > 
        <option selected="selected" value="" key="">Select</option>
            {this.state.names.map(mov => 
            <option key={mov.name} value={mov.name}>{mov.name}</option>)}
        </select> <br/>
        Director Id:<br/> <input type="text" name="directorid" value={this.state.directorid} onChange={this.handleChange} /> <br/>
        ReleaseDate:<br/> <input type="date" name="releaseDate" value={this.state.releaseDate} onChange={this.handleChange} /> <br/>
        Rating:<br/> <input type="text" name="imdbRating" value={this.state.imdbRating} onChange={this.handleChange} /> <br/>
        Duration:<br/> <input type="text" name="duration" value={this.state.duration} onChange={this.handleChange} /> <br/>
        Genre:<br/> <input type="text" name="genre" value={this.state.genre} onChange={this.handleChange} /> <br/>

        <button className="button button1" type="button" onClick = {this.login}>
            Update
        </button>
        <Link to="/admin"> <button className="button button1" type="button">
            Go to homepage
        </button></Link>
        </div>
    )
}
}
export default MovieUpdate;