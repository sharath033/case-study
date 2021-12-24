import React from 'react';
//import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router,Routes } from 'react-router-dom';
import App from '../App';
import AddBookmark from './AddBookmark';
import AddNotes from './AddNotes';
import Dummy from './Dummy';

import GetTaskData from './GetTaskData';
import AddTask from './AddTask';
import UpdatePriority from './UpdatePriority';
import DeleteTask from './DeleteTask';


import SearchTask from './SearchTask';
//import UserLogin from './Login';
import TrackTask from './TrackTask';
import AssignTask from './AssignTask';
//import dumm from './Route';
//import routing from './Route';

//import Dummy from './Dummy';

const routing=(
    <Router>
        <div>
               <p style={{"color":"blue","textAlign":"center"}}>
                
                <button>
                    <Link to="/Dashboard">Dashboard</Link>
                </button>
                <button>
                    <Link to="/navigate">navigate</Link>
                </button>
                <button>
                    <Link to="/gettask">GET ALL Task</Link>
                </button>

                <button>
                    <Link to="/addtask">ADD TASK</Link>
                </button>
                <button>
                    <Link to="/updatepri">UPDATE PRIORITY</Link>
                </button>
                <button>
                    <Link to="/deletetask">DELETE TASK</Link>
                </button>
                <button>
                    <Link to="/searchtask">SEARCH TASK</Link>
                </button>
                <button>
                    <Link to="/assigntask">ASSIGN TASK</Link>
                </button>
                <button>
                    <Link to="/searchstatus">SEARCH TASK by status</Link>
                </button>
                <button>
                    <Link to="/addnotes">ADD NOTES</Link>
                </button>
                <button>
                    <Link to="/addb">ADD BOOKMARK</Link>
                </button>
                
                


               </p>
        
       
        <Routes>
            
            
            <Route path="/Dashboard" element={<App/>} />
            <Route path="/navigate" element={<Dummy/>}/>
            <Route path="/gettask" element={<GetTaskData/>}/>
            <Route path="/updatepri" element={<UpdatePriority/>}/>
            <Route path="/deletetask" element={<DeleteTask/>}/>
            <Route path="/searchtask" element={<SearchTask/>}/>
            <Route path="/assigntask" element={<AssignTask/>}/>
            <Route path="/searchstatus" element={<TrackTask/>}/>
            <Route path="/addnotes" element={<AddNotes/>}/>
            <Route path="/addb" element={<AddBookmark/>}/>
            <Route path="/addtask" element={<AddTask/>}/>


            

          
           
        </Routes>
        </div>
    </Router>
)
export default routing;