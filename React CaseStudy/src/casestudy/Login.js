import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserLogin extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:''
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
        axios.get("http://localhost:8080/username/"+this.state.username+"/pwd/"+this.state.password,this.state)
        .then(response => {
            console.log(response)
            if((response.username="Paul Stirling")&&(response.password="Skr@123")){
                alert("Logged In Successfull!");
            }
            else{
                alert("Enter  Valid  Credentials.!")
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
    render(){
        const {username,password} = this.state
        return (
            
            
            <div style={{"backgroundColor":"tomato","color":"black", textAlign:"center"}}>

                <h1 style={{fontFamily:"cursive", color: 'white'}}> <u>  Task Tracking System </u> </h1> 

                <h2 style={{fontFamily:'cursive', color: 'white'}}>Login</h2>

            <form  onSubmit={this.submitHandler}>
                <div style={{fontFamily:'cursive', color: 'white'}}>
                    UserName:
                    <input type="text" name="username" value={username} onChange={this.changeHandler} placeholder="Username" required/>
                </div>
                <br></br>
                       
                <div style={{fontFamily:'cursive', color: 'white'}}>
                Password :
                <input type="password" name="password" value={password} onChange={this.changeHandler} placeholder="Password" required/>
                </div>
                <br></br>
                <Link to="/navigate">
                 <button type="submit">Login</button>
                 </Link>
            </form>
        </div>
        
        
        )
    }
}
export default UserLogin;