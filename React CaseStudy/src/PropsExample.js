import react from  'react';

const PropsExample = (props) => {
    return (
        <div>
            <h1> My Props example name is: {props.studentid} {props.name} {props.marks}</h1>
            <h2> {props.children}</h2>
        </div>
    )
}

export default PropsExample;