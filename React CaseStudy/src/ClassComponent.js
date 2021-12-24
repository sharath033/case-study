import React, {Component} from "react";

import PropsExample from "./PropsExample";

class ClassComponent extends Component{
    render(){
        return(
            <div>
                {this.props.studentid}
                {this.props.name}
                {this.props.marks}
            </div>
        );
    }
}

export default ClassComponent;