import React, { Component} from 'react';
import ClassComponent from './ClassComponent';
import PropsExample from './PropsExample';

class ClassComponentExample extends Component{
    render(){
        return(
            <div>
                <h1> My Class Component </h1>
                    <PropsExample name= "Nikhil" age ={22}>
                        <p> This is my Child tag</p>
                    </PropsExample>
                <PropsExample name = "Sharath" />
                <ClassComponent studentid= {1} name="Krishna" marks={85}></ClassComponent>
            </div>
        )
    }
}

export default ClassComponentExample;