import { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Menu=()=>{
function showMenu() {
    if((document.getElementById("navLinks"))!=null)
    {
        document.getElementById("navLinks").style.right = "0";
    }
}
function hideMenu() {
    
    if((document.getElementById("navLinks"))!==null)
    {
        document.getElementById("navLinks").style.right = "-200px";
    }
   
}
    return (<div>
        <div className="header">
            <div className="logo" >
                <h3>Fakhra.PortFolio</h3>
            </div>
            <div className="navbar" id="navLinks">
            {/* <i class="fa fa-times" onclick="hideMenu()"></i> */}
            <FontAwesomeIcon className="icons" icon="times" onClick={hideMenu}/>
                <div>
               
                     <Link to="/home">Home </Link> 
                    <Link to="/about">About </Link>
                    <Link to="/work">Work </Link>
                    <Link to="/skills">Skills </Link>
                    <Link to="/experience">Experience </Link>
                    <Link to="/contact">Contact </Link>
                  
                </div>
               
            </div>
            <FontAwesomeIcon className="icons" icon="bars" onClick={showMenu}/>
        </div>
      
    </div>)
}
export default Menu;