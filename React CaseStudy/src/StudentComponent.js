import React, { Component } from "react";

import StudentProps from "./StudentProps";



class StudentComponent extends Component{

    render(){

        return(

            <div>

                <h1>Student Details</h1>

                <StudentProps id = {101} name = "Sharath" marks={550}></StudentProps>

                <StudentProps id = {102} name = "Krishna" marks = {560}></StudentProps>

                <StudentProps id = {103} name = "Nikhil" marks = {570}></StudentProps>

                <StudentProps id = {104} name = "Charan" marks = {580}></StudentProps>

                <StudentProps id = {105} name = "Shankar" marks = {590}></StudentProps>

            </div>

        )

    }

}

export default StudentComponent;