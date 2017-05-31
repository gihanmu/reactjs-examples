import React from 'react';

export class Task extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-sm-6 col-sm-offset-4">
                    <input type="text" value={this.props.name} placeholder="Type your task here" className="col-sm-4"/>
                    <button className="btn-sm btn-primary">Add</button>
                </div>         
                
            </div>
        )
    }


}