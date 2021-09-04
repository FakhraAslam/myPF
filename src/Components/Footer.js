import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faYoutube, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { Linking } from 'react';
const Footer = () => {
    return (<div className="footer-main">

        <div className="brandIcons">
            
          
          
           
           

<a href="https://www.facebook.com/knowlegeseekers">  <FontAwesomeIcon  className="brand_icons fb" icon={faFacebook} /></a>
<a href="https://www.youtube.com/SeekersforSeekers">   <FontAwesomeIcon  className="brand_icons yt" icon={faYoutube} /></a>
<a href="https://www.linkedin.com/in/fakhraaslam/ttps://linkedIn/in/FakhraAslam"> <FontAwesomeIcon  className="brand_icons likn" icon={faLinkedinIn} /></a>
<a href="https://www.github.com/FakhraAslam">  <FontAwesomeIcon  className="brand_icons github" icon={faGithub} /></a>


        </div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
    </div>)
}
export default Footer;