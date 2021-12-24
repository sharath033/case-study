import axios from "axios";
import React, { Component } from "react";

class UpdatePriority extends Component {
    constructor(props){
        super(props)
        this.state = {
            taskID:'',
            priority:'',
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
        axios.get("http://localhost:8080/taskid/"+this.state.taskID+"/priority/"+this.state.priority,this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        const {taskID,priority} = this.state
        return (
            <div style={{"backgroundColor":"teal","color":"black","textAlign":"center"}}>
                <h2>Update Priority</h2>
            <form  onSubmit={this.submitHandler}>
                <div>
                    TASK ID:
                    <input type="number" name="taskID" value={taskID} onChange={this.changeHandler} placeholder="TASK ID" required/>
                </div>
                        
                <div>
                    PRIORITY:
                        <select  name="priority" value={priority} onChange={this.changeHandler} >
                                <option value="select">select</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                        </select>
                </div>
                 <button type="submit">Submit</button>

            </form>
        </div>
            
        )
    }
}

export default UpdatePriority;