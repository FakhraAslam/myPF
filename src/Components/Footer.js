import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faFacebook,faYoutube,faLinkedinIn,faGithub } from "@fortawesome/free-brands-svg-icons"
const Footer=()=>{
    return(<div className="footer-main">
        
        <div className="brandIcons">
       
        <FontAwesomeIcon className="brand_icons fb"  icon={faFacebook}/>
        <FontAwesomeIcon className="brand_icons yt" icon={faYoutube}/>
        <FontAwesomeIcon className="brand_icons likn" icon={faLinkedinIn}/>
        <FontAwesomeIcon className="brand_icons github" icon={faGithub}/>
            </div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        </div>)
}
export default Footer;