import React from 'react';
import {render} from 'react-dom';
import {Task} from './components/Task'


export class App extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-sm-3 col-sm-offset-4">
                    <p>My Task Manager</p>
                </div>                
                <Task name="From my main component"/>
            </div>
           

        )    
        
    }
}

render(<App/>, window.document.getElementById("app"));