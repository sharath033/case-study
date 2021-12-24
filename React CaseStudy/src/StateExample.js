import React ,{Component} from 'react'

class StateExample extends Component{
    constructor(){
        super()
        this.state={ message:'Welcome visitor'}
        this.changeMessage = this.changeMessage.bind(this);

    }
    changeMessage(){
        this.setState({ message: 'thank you for subscribing'})
    }
    render(){
        return(
            <div>
                <hr></hr>
                <h1>{this.state.message} </h1>
                <h2>Welcome to sonata</h2>
                <button onClick={this.changeMessage}>change</button>
            </div>
        )
    }
}

export  default StateExample;