import React, {Component} from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';



class AddTask extends Component{
constructor(props){
super(props)
this.state={
taskID :'',
ownerID :'',
creatorID :'',
name : '',
description :'',
status :'',
priority :'',
notes :'',
isBookmarked : '',
createdOn :'',
statusChangedOn :''
}
this.changeHandler=this.changeHandler.bind(this);
this.submithandler=this.submithandler.bind(this);
}
changeHandler(e){
this.setState({[e.target.name]:e.target.value})
}
submithandler(e){
e.preventDefault()
console.log(this.state)
axios
.post('http://localhost:8080/createTask',this.state)
.then(response=>{
console.log(response)
})
.catch(error=>{
console.log(error)
})
}
render(){
const {taskID, ownerID,creatorID,name, description, status, priority, notes, isBookmarked, createdOn, statusChangedOn}=this.state
return(
<div style={{backgroundColor:"yellow",textAlign:'center'}}>
    <h2>ADD NEW TASK</h2>
<form onSubmit={this.submithandler}>
<div>
task_ID:
<input type="number" name ="taskID" value ={taskID} onChange={this.changeHandler}/>
</div>
<div>
owner_ID:
<input type="number" name ="ownerID" value ={ownerID} onChange={this.changeHandler}/>
</div>
<div>
creator_ID:
<input type="number" name ="creatorID" value ={creatorID} onChange={this.changeHandler}/>
</div>
<div>
name:
<input type="text" name ="name" value ={name} onChange={this.changeHandler}/>
</div>
<div>
description:
<input type="text" name ="description" value ={description} onChange={this.changeHandler}/>
</div>
<div>
status:
<select id ="status" name="status" value ={status} onChange={this.changeHandler}>
<option value="select">select</option>
<option value ="InProgress">InProgress</option>
<option value ="OnHold">OnHold</option>
<option value ="Cancelled">Cancelled</option>
</select>
</div>
<div>
priority:
<select id ="priority" name ="priority" value ={priority} onChange={this.changeHandler}>
<option value ="select">select</option>
<option value ="medium">medium</option>
<option value ="low">low</option>
<option value = "high">high</option>
</select>
</div>
<div>
notes:
<input type="text" name ="notes" value ={notes} onChange={this.changeHandler}/>
</div>
<div>
isBookmarked:
<select id ="isBookmarked" name ="isBookmarked" value ={isBookmarked} onChange={this.changeHandler}>
<option value ="T/F">T/F</option>
<option value ="false">false</option>
<option value = "true">true</option>
</select>
</div>
<div>
created_On:
<input type="date" name ="createdOn" value ={createdOn} onChange={this.changeHandler}/>
</div>
<div>
status_Changed_On:
<input type="date" name ="statusChangedOn" value ={statusChangedOn} onChange={this.changeHandler}/>
</div>


<br></br>
<button type="submit">Submit</button>
<br></br>
</form>
</div>
)
}



}
export default AddTask;