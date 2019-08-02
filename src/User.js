import React from 'react';
import {Link} from 'react-router-dom';

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
        };

    }
    render() {
        return (   <div>
            Search & List Movies:<br/> <hr></hr>
            <Link to="/listMovies">
            <button className="button button1"  type="button">
                List
            </button>
            </Link>
            
            <Link to="/searchMovie">
            <button className="button button1"  type="button">
                Search
            </button>
            </Link>
            <br/> <br/> <br/> 

            Add movie to watched & fav list: <br/> <hr></hr>
            <Link to="/addWatchedList">
            <button className="button button1"  type="button">
                Watched List
            </button>
            </Link>
            
            <Link to="/addFavouriteList">
            <button className="button button1"  type="button">
                Favourite List
            </button>
            </Link>
            
       </div>
          )
    }
}
export default User;