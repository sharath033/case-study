import React, { Component } from "react";
import axios from "axios";

class Gettaskbyid extends Component {
    constructor() {
        super()
        this.state = {
            status:'',
            tasks:[]
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitHandler=this.submitHandler.bind(this);
    }
    changeHandler = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    submitHandler = (event) =>  {
        event.preventDefault()
        console.log(this.state)
        axios.get("http://localhost:8080/status/"+this.state.status,this.state)
            .then(response => this.setState({tasks:response.data}))
    }
    
    render() {
        const {status} = this.state
        return (
            
            <div style={{ "backgroundColor": "aquamarine", "color": "black", "textAlign": "center" }}>
                <h2>Search task by status</h2>
                  <form  onSubmit={this.submitHandler}>
                <div>
                taskID:
                    <input type="text" name="status" value={status} onChange={this.changeHandler} placeholder="status" required/>
                </div>
                <br></br>
                
                 <button className='button' type="submit">Submit</button>
                <br>
                </br>
                <br></br>
            </form>
                
            <div>{this.state.tasks.map(task =>(
            <h3>
            <hr></hr>
            <br></br>

            TaskID:{task.taskID}<br></br>
            TaskOwner:{task.ownerID}<br></br>
            Task CreatorID:{task.creatorID}<br></br>
            TaskName:{task.name}<br></br>
            Description:{task.description}<br></br>
            Task status:{task.status}<br></br>
            Priority:{task.priority}<br></br>
            notes:{task.notes}<br></br>
            isBookmarked:{task.isBookmarked.toString()}<br></br>
            createdon:{task.createdOn}<br></br>
            statusChangedOn:{task.statusChangedOn}<br></br>


            </h3>))}</div>
            </div>
            





        )
    }

}
export default Gettaskbyid;