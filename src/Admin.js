import React from 'react';
import {Link} from 'react-router-dom';
import "./App.css";
class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
        };

    }
    render() {
        return (   <div>
            Adding Operations: <br/> <hr></hr>
            <Link to="/addUser">
            <button  className="button button1" type="button">
                User
            </button>
            </Link>
            
            <Link to="/addDirector">
            <button  className="button button1" type="button">
                Director
            </button>
            </Link>
            
            <Link to="/addMovie">
            <button className="button button1" type="button">
                Movie
            </button>
            </Link> <br/> <br/> <br/> 

            Update Operations: <br/> <hr></hr>
            <Link to="/updateUser">
            <button className="button button1" type="button">
                User
            </button>
            </Link>
            
            <Link to="/updateDirector">
            <button className="button button1" type="button">
                Director
            </button>
            </Link>
            
            <Link to="/updateMovie">
            <button className="button button1" type="button">
                Movie
            </button> <br/> <br/> <br/>
            </Link>

            Deleting Operations: <br/> <hr></hr>
            <Link to="/deleteUser">
            <button className="button button1" type="button">
                User
            </button>
            </Link>
            
            <Link to="/deleteDirector">
            <button className="button button1" type="button">
                Director
            </button>
            </Link>
            
            <Link to="/deleteMovie">
            <button className="button button1" type="button">
                Movie
            </button>
            </Link>
            <br/>
            <br/>
            Search Operations: <br/> <hr></hr>
            <Link to="/searchUsers">
            <button className="button button1" type="button">
                Search User
            </button>
            </Link>
            
            <Link to="/searchDirectors">
            <button className="button button1" type="button">
                Search Director
            </button>
            </Link>
            
            <Link to="/searchMovies">
            <button className="button button1" type="button">
                Search Movie
            </button>
            </Link>
            <br/><br/>

            <Link to="/displayMovies">
            <button className="button button1" type="button">
                Display Director Movies
            </button>
            </Link>
            </div>
        )
    }
}
export default Admin;
