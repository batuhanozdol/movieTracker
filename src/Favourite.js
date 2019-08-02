import React from 'react';

class Favourite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filmler:[],movies:[],names:[],username:"",name:"",result:""   
        };
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.watch = this.watch.bind(this);

    } 
    componentDidMount(){
        fetch('http://localhost:8082/findUsers', {
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
                this.setState({result:error});
            });
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
                   this.setState({movies:data})
                }
            }).catch(error => {
                this.setState({result:"Can't added"});
            });
    }
    
    login(event) {
        fetch('http://localhost:8082/addFavouriteList/'+this.state.username, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name:this.state.name
        })
        }).then(data=> {              
                if(data.error==undefined){
                    this.setState({result:"Added"});
                }
                else {
                    this.setState({result:"Can't added"});
                }
            }).catch(error => {
                console.error(error);
            });
    }
    watch(event){
         fetch('http://localhost:8082/fav', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        }).then(
            response=> response.json())
            .then(data=> {              
                if(data.error==undefined){
                    this.setState({filmler:data})
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
    return (    <div><h2> Add Fav List </h2> <br/>
        Your name:<br/>  
        <select name="username" onChange={this.handleChange}> 
        <option key="" value="">Select</option>
        {this.state.names.map(mov => 
        <option key={mov.id} value={mov.username}>{mov.username}</option>)}
        </select> <br/>
        
        Movie name:<br/>
        <select name="name" onChange={this.handleChange}> 
        <option key="" value="">Select</option>
        {this.state.movies.map(mo => 
        <option name="name" key={mo.id} value={mo.name}>{mo.name}</option>)}
        </select> <br/>
        
        <button  className="button button1" type="button" onClick = {this.login}>
            Add
        </button>
            {this.state.result} 
        <button className="button button1" type="button" onClick = {this.watch}>
            Show list
        </button>
        <br/><h4>Watched List </h4><br/>
        <table className="fl-table" border="6">
        <tbody key="tbody">
            <tr>
                <th>Watched list id</th>
                <th>Movie Name</th>
                <th>Watcher User ID</th>

        </tr>
             {this.state.filmler.map(mo =>(<tr key={mo.id}>
                    <td>{mo.id}</td>
                    <td>{mo.moviename}</td>
                    <td>{mo.userid}</td>
 
             </tr>))}    
        </tbody>
        </table>
        </div>
    )
}
}
export default Favourite;