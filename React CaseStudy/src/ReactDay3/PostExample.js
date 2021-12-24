import React, {Component} from 'react';
import axios from 'axios';

class PostExample extends Component{
    constructor(props){
        super(props)

        this.state={
            userId:'',
            title:'',
            body:''
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitHandler=this.submitHandler.bind(this);
    }
    changeHandler(e){
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler(e){
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render(){
        const{userId,title,body}=this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        UserID:
                        <input
                        type="text"
                        name="userId"
                        value={userId}
                        onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        Title:
                        <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        Body:
                        <input 
                        type="text"
                        name="body"
                        value={body}
                        onChange={this.changeHandler}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default PostExample;