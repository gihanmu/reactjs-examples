import React from 'react';


export class Task extends React.Component{
        constructor(){
            super();
            this.state ={
                task : '',
                input :'',
                tasks : []
            }
        }

        onChangeHandler(event){
            this.setState({
                input : event.target.value
            })
        }

        addTask(){
            var taskArray = this.state.tasks;
            taskArray.push(this.state.input);
            console.log(taskArray);
            this.setState({
                tasks: taskArray,
                input : ''
                
            })
        }
        render(){
              var styles = {
                    margin : "10px"
              }

              var liItems = [];
              for(var i=0;i<this.state.tasks.length;i++){
                  liItems.push(<li key={i}>{this.state.tasks[i]}</li>)
              }
        return(
            
            <div className="row">
                <div className="col-sm-6 col-sm-offset-4">
                    <input type="text" value={this.state.input} placeholder="Type your task here" className="col-sm-4"
                    onChange={(event)=>this.onChangeHandler(event)}
                    />
                    <button className="btn-sm btn-primary" onClick={() => this.addTask()}>Add</button>
                </div>  
                 
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                         <ul>
                            {liItems}    
                        </ul> 
                    </div>
                </div>
                  
               
            </div>
        )
        }


}