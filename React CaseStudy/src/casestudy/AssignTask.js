import axios from "axios";
import React, { Component } from "react";

class AssignTask extends Component {
    constructor(props){
        super(props)
        this.state = {
            taskID:'',
            ownerID:'',
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitHandler=this.submitHandler.bind(this);
    }
    changeHandler = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        axios.get("http://localhost:8080/taskid/"+this.state.taskID+"/userid/"+this.state.ownerID,this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        const {taskID,ownerID} = this.state
        return (
            <div style={{"backgroundColor":"teal","color":"black","textAlign":"center"}}>
                <h2>Assign Task</h2>
            <form  onSubmit={this.submitHandler}>
                <div>
                    TASK ID:
                    <input type="number" name="taskID" value={taskID} onChange={this.changeHandler} placeholder="TASK ID" required/>
                </div>
                        
                <div>
                    Owner ID:
                    <input type="number" name="ownerID" value={ownerID} onChange={this.changeHandler} placeholder="OWNER ID" required/>
                </div>
                <br></br>
                 <button type="submit">Submit</button>
                 

            </form>
        </div>
            
        )
    }
}

export default AssignTask;