import React from "react";



const StudentProps = (props) =>{

    return(

        <div>

            <hr></hr>

            <h3>Student ID : {props.id}</h3>

            <h3>Student Name : {props.name}</h3>

            <h3>Total Marks : {props.marks}</h3>

        </div>

    )

}

export default StudentProps;