import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faYoutube, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { Linking } from 'react';
const Footer = () => {
    return (<div className="footer-main">

        <div className="brandIcons">
            <FontAwesomeIcon onPress={() => Linking.openURL('/https://www.facebook.com/knowlegeseekers')} className="brand_icons fb" icon={faFacebook} />
            <FontAwesomeIcon onPress={() => Linking.openURL('/https://www.youtube.com/SeekersforSeekers')} className="brand_icons yt" icon={faYoutube} />
            <FontAwesomeIcon onPress={() => Linking.openURL('hhttps://www.linkedin.com/in/fakhraaslam/ttps://linkedIn/in/FakhraAslam')} className="brand_icons likn" icon={faLinkedinIn} />
            <FontAwesomeIcon onPress={() => Linking.openURL('/https://www.github.com/FakhraAslam')} className="brand_icons github" icon={faGithub} />





        </div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
    </div>)
}
export default Footer;