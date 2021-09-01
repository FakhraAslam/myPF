import { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Menu=()=>{
    
        function vanish(){
            if (window.innerWidth < 700) {
            if((document.getElementsByClassName("menus"))!=null){
                document.getElementById("navLinks").style.display = "none";
            }
        }
        }
      
 
    
function showMenu() {
    if((document.getElementById("navLinks"))!=null)
    {
        document.getElementById("navLinks").style.display = "block";
        document.getElementById("navLinks").style.right = "0";
    }
}
function hideMenu() {
    
    if((document.getElementById("navLinks"))!==null)
    {
        document.getElementById("navLinks").style.display = "none";
    }
   
}
    return (<div>
        <div className="header">
            <div className="logo" >
                <h3>Fakhra.PortFolio</h3>
            </div>
            <div className="navbar , mobilenavbar" id="navLinks">
            {/* <i class="fa fa-times" onclick="hideMenu()"></i> */}
            <FontAwesomeIcon className="icons" icon="times" onClick={hideMenu}/>
                <div>
               
                    <Link className="menus" onClick={vanish}  to="/home">Home </Link> 
                    <Link className="menus" onClick={vanish} to="/about">About </Link>
                    {/* <Link className="menus" onClick={vanish} to="/work">Work </Link> */}
                    <Link className="menus" onClick={vanish} to="/skills">Skills </Link>
                    {/* <Link className="menus" onClick={vanish} to="/experience">Experience </Link> */}
                    <Link className="menus" onClick={vanish} to="/contact">Contact </Link>
                  
                </div>
               
            </div>
            <FontAwesomeIcon className="icons" icon="bars" onClick={showMenu}/>
        </div>
      
    </div>)
}
export default Menu;