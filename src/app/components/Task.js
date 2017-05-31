import React from 'react';

export class Task extends React.Component{
    constructor(props){
        super();
        this.state = {
            input : ''
            
        }

    }

    onChangeHandler(event){
      this.setState({
          'input' : event.target.value
      })
        
    }

    addTask(){
        this.setState({
            task : this.state.input
        })
        
    }
    
    render(){
        var styles = {
            margin : "10px"
        }
        return(
            <div className="row">
                <div className="col-sm-6 col-sm-offset-4">
                    <input type="text" value={this.state.input} placeholder="Type your task here" className="col-sm-4"
                    onChange={(event)=>this.onChangeHandler(event)}
                    />
                    <button className="btn-sm btn-primary" onClick={() => this.addTask()}>Add</button>
                </div>  
                <div className="container" style={{display: this.state.task ? 'block' : 'none' }}>
                    <div className="col-sm-3 col-sm-offset-2" style={styles}>
                        <div className="panel panel-success">
                            <div className="panel-heading">Your task</div>
                            <div className="panel-body"> {this.state.task}</div>
                        </div>                                       
                    </div>
                </div>      
               
            </div>
        )
    }


}