import React from 'react';

export class Task extends React.Component{
    constructor(props){
        super();
        this.state = {
            'input' : props.name
        }

    }

    onChangeHandler(event){
      this.setState({
          'input' : event.target.value
      })
        
    }
    
    render(){
        return(
            <div className="row">
                <div className="col-sm-6 col-sm-offset-4">
                    <input type="text" value={this.state.input} placeholder="Type your task here" className="col-sm-4"
                    onChange={(event)=>this.onChangeHandler(event)}
                    />
                    <button className="btn-sm btn-primary">Add</button>
                </div>         
                
            </div>
        )
    }


}