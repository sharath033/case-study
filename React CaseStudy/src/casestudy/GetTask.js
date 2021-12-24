import React, { Component } from "react";

import axios from "axios";



class GetTask extends Component{

     

     

    constructor(props){

        super(props)

        this.state ={

            tasks :[]

        }

        this.handleClick = this.handleClick.bind(this)

    }

    handleClick(){

        axios.get('http://localhost:8080/tasks')

        .then(response=>{

            this.setState({tasks:response.data})

            console.log(response.data)

        })

   

    }
    render(){



        const {tasks} = this.state



        return(

        <div>
            
            <button className="button" onClick={this.handleClick}>Click me</button>

            <h3>Task Details</h3>

            {

                tasks.map(task =>



                    <div key={task.taskID}>

                        Task ID : {task.taskID} <br/>

                    </div>

                   

                )

             }



        </div>

        )

    }

   

}

export default GetTask;