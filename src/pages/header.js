
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header=()=>{
   return(
       <div>
   <header className="navbar navbar-expand-lg navbar-dark bg-dark">

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
   <li className="nav-item ">
     <NavLink className="nav-link" to="/home" >Home</NavLink>
   </li>
   <li className="nav-item">
     <NavLink className="nav-link" to="/ongoing-projects" >Ongoing Project</NavLink>
   </li>
   <li className="nav-item">
     <NavLink className="nav-link" to="/completed-projects">Completed Project</NavLink>
   </li>
    <li className="nav-item">
   <NavLink className="nav-link" to="/about">About</NavLink>
   </li>
   <li className="nav-item">
     <NavLink className="nav-link" to="/contact">Contacts</NavLink>
   </li>

 </ul>

</div>
</header>
        </div>
   )
}
export default Header;