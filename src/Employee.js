import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
// 1== "1" true
// 1==="1" false
class Employee extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employees:[],status:"LOADING"      
        };
    }
    componentDidMount() {
        fetch("http://dummy.restapiexample.com/api/v1/employees").then(
        response=> response.json())    
        .then(data=> {
            this.setState({employees:data,status:"SUCCESS"});
            console.log(data);
        }).catch(error => {
            console.error(error);
            this.setState({employees:[],status:"FAIL"});
        });
    }
    render () {
        if (this.state.status !=="SUCCESS") {
            return <div> {this.state.status}</div>;
        }
        else {
            const employeesView = this.state.employees.map(employee => (<div>
                {employee.employee_name} ({employee.employee_age}) <hr/>
            </div>
            ));
            return employeesView; 
        }
    }
}

export default Employee;