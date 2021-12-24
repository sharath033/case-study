import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import AddBookmark from './AddBookmark';

class Dummy extends Component{
    
    render(){
        return(
            
            <div style={{backgroundColor:"green",textAlign:"center"}}>
            <Link to="/gettask">
             <button>Get task</button>
            </Link>

             <Link to="/addtask">
            <button>ADD TASK</button>
            </Link>

            <Link to="/updatepri">
            <button>UPDATE PRIORITY</button>
            </Link>
            <Link to="/deletetask">
            <button>DELETE TASK</button>
            </Link>
            <Link to="/searchtask">
            <button>SEARCH TASK</button>
            </Link>
            
            </div>
            
        )
    }
}
export default Dummy;