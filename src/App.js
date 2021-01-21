import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import GithubDetails from './components/github-details/GithubDetails';
import githubService from './api/Github-service';

function App() {

  const [githubDetails,setGithubDetails] = useState([]);
  const [user,setUser] = useState([]);
  const [forks,setForks] = useState([]);

  const loadGithubDetails = () => {
    githubService.getGithubDetails(user)
        .then(res => {
          setGithubDetails(res.data);
         
            
        })
        .catch(err => console.error(err));
};
const onGistSelected=(gist)=>{
  githubService.getGistForks(gist.id).then((res)=>{
    setForks(res.data && res.data.length>0 ?res.data.slice(0, 3):[])
  })
}

const handleUserChange=(event)=>{
setUser(event.target.value);
}

  return (

  <div  className="App">
   <div  className="Header">
   <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Github Demo</a>
  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
<input type="text" placeholder="UserName ..."value={user} onChange={handleUserChange}></input>

 <ul className="navbar-nav px-3">
    <li className="nav-item text-nowrap">
    <button className="btn btn-primary" onClick={loadGithubDetails}>Search</button>
    </li>
  </ul>
</header>

<div className="container-fluid">
<div className="row">
    <div className="col-md-3 col-lg-2">
   <Sidebar showForks={githubDetails && githubDetails.length>0} forks={forks}></Sidebar>
    </div>
   <div className="col-md-9 col-lg-10">
   <main className="ml-sm-auto px-md-4">
     <GithubDetails githubDetails={githubDetails} onGistSelected={onGistSelected}></GithubDetails>
       </main>
   </div>
  </div>
  </div>
</div>
 </div>

 );
}

export default App;
