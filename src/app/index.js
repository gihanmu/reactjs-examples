import React from 'react';
import {render} from 'react-dom';
import {Task} from './components/Task'

export class App extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-sm-4 col-sm-offset-4">
                     <h1>My app is up and running</h1>
                     <Task/>
                </div>           
            </div>
            
        )
    }
}

render(<App/>, window.document.getElementById('app'));
