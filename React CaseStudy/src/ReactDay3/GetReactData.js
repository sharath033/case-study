import React, {Component} from 'react';
import axios from 'axios';

class GetReactData extends Component{
    constructor () {
        super()
        this.state = {
            username: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick () {
        axios.get('https://api.github.com/users/maecapozzi')
        .then(response =>this.setState({username: response.data.name}))
    }
    render (){
        return(
            <div>
                <button className='button' onClick={this.handleClick}>click me </button>
                <p>{this.state.username}</p>
            </div>
        )
    }
}
export default GetReactData;