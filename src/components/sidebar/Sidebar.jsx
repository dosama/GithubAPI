import React from 'react';
import './Sidebar.css';
import * as Icon from 'react-feather';

function Sidebar(props) {
  return (
  <div  className="Sidebar">
    
    <nav id="sidebarMenu" className="d-md-block bg-light sidebar collapse">
    <h4 className="p-2">Last 3 Forks:</h4>
      {props.showForks  && <div className="position-sticky p-2">
      {props.forks && props.forks.length >0 ?
        <ul className="nav flex-column">
       {props.forks.map((item) =>
                               <li key={item.id} >
                                 <div className="row col-md-12">
                                 <img className="avatar-image mt-1" src={item.owner.avatar_url}></img>
            <div className="fork-user ml-2 ">{item.owner.login}</div>
                                 </div>
                                
                               </li>)}</ul>:<div className="no-forks p-0">No Forks For Selected Gist</div>}
   </div>}
    </nav>

 </div>

 );
}

export default Sidebar;
