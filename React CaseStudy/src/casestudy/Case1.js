import React, {Component} from 'react';
import axios from 'axios';


class Case1 extends Component{
    constructor(){
        super()
        this.state = {
            taskid: '',
            ownerid: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        axios.get('http://localhost:8080/tasks')
        .then(response=>this.setState({taskid:response.data[0].taskID,ownerid:response.data[0].ownerID}))
    }
    //tasklist map to be used for array of data..!
    render(){
        return(
            <div>
            <button className="button" onClick={this.handleClick}>click me </button>
            <p>{this.state.taskid}</p>
            <p>{this.state.ownerid}</p>
            </div>
        )
    }
}
export default Case1;