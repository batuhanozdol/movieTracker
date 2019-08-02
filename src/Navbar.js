import React from 'react';
import "./App.css";

class Navbar extends React.Component {

    render(){
        return (

            <ul>
            <li><a className="active" href="/admin">Home</a></li>
            <li style={{float:"right"}}><a className="active" href="/">Logout</a></li>
            <li><a className="active" href="/user">User Panel</a></li>

            </ul>

        );
    }

}
export default Navbar;
