import React,{Component} from 'react';
import axios from 'axios';



class GetTaskData extends Component{
constructor(){
super()
this.state={
tasks:[]
}
this.handleClick = this.handleClick.bind(this)
}
handleClick(){
axios.get('http://localhost:8080/tasks')
.then(response => this.setState({tasks:response.data}))
}
render(){
return(
    
<div style={{color:"black",backgroundColor:"tomato",textAlign:"center"}}>
<button  className='button' onClick={this.handleClick} >Click here to GET ALL Task</button>

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
export default GetTaskData;