import { extend } from 'jquery';
import React, { Component } from 'react';

import { useState} from 'react'



export class Maverick extends Component{
   

    constructor(props) {
        super(props);
        this.state = { students: [], loading: true };
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    static renderstudentsTable(students) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Student Name</th>
                        <th>D.O.B</th>
                        <th>Height</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(std => (                   
                        <tr key={std.studentID} >
                            <td>{std.studentID}</td>
                            <td>{std.studentName}</td>
                            <td>{std.dateOfBirth}</td>
                            <td>{std.height}</td>
                            <td>{std.weight}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Maverick.renderstudentsTable(this.state.students);

        return (

            <div>
                <h1 id="tabelLabel" >Fetched Students From the API</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
    
    )
    }

    async populateWeatherData() {   

        const resp = await fetch('/api/Students1')
            .then(res => res.json())
            .then(
                (result) =>{
                    //console.log(result)
                    this.setState({
                      students: result, loading: false
                    });
                }
            );
    }
}