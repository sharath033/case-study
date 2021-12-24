import axios from "axios";
import React, { Component } from "react";

class AddNotes extends Component {
    constructor(props){
        super(props)
        this.state = {
            taskID:'',
            notes:'',
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
        axios.get("http://localhost:8080/taskid/"+this.state.taskID+"/notes/"+this.state.notes,this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        const {taskID,notes} = this.state
        return (
            <div style={{"backgroundColor":"pink","color":"black","textAlign":"center"}}>
                <h2>ADD NOTES</h2>
            <form  onSubmit={this.submitHandler}>
                <div>
                    TASK ID:
                    <input type="number" name="taskID" value={taskID} onChange={this.changeHandler} placeholder="TASK ID" required/>
                </div>
                <div>
                    Notes:
                    <input type="text" name="notes" value={notes} onChange={this.changeHandler} placeholder="Notes" required/>
                </div>
                        
                
                 <button type="submit">Submit</button>

            </form>
        </div>
            
        )
    }
}

export default AddNotes;