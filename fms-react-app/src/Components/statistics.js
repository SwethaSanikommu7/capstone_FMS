import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

class Stats extends Component {
        constructor(props) {
            super(props);
            this.state={
                todo: [{id:1, TotalEvents:'8', LivesImpacted:"877", TotalVoluntiers:"45", TotalParticipants:"45"}]
            }
        }

        render() {
            const myStyle={
                marginTop:"90px"
            };
            return(
                <div style ={myStyle}>
                    <h1>Event Details</h1>
                    <table class="table">
                        <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">TotalEvents</th>
                        <th scope="col">LivesImpacted</th>
                        <th scope="col">TotalVoluntiers</th>
                        <th scope="col">TotalParticipants</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.todo.map(
                                todos => 
                                <tr>
                                <td>{todos.id}</td>
                                <td>{todos.TotalEvents}</td>
                                <td>{todos.LivesImpacted}</td>
                                <td>{todos.TotalVoluntiers}</td>
                                <td>{todos.TotalParticipants}</td>
                            </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
                
            )
    }
}
export default Stats;


