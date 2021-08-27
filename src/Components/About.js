import { useEffect } from "react";
import $ from "jquery";
import planeSurface from "../Images/planeSurface.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const About = () => {
//     window.onload = function(){ 
//  alert("fffffff");
//        var clickImages= document.getElementsByClassName("col");
//        for(var i=0;clickImages.length;i++){
//         alert("fffffff");
//            var clicked= clickImages[i];
//            clicked.addEventListener("click",activeImage);
//        }
//     };
//    function activeImage(){
//     document.getElementById("aboutDetailsId").onclick = function () {alert('onclick');}; 
//    }
//     // $(function () {
//     //     $("#aboutDetailsId").click(function () {
//     //         console.log("clicked");
//     //         document.getElementById("aboutdetailsListId").classList.add("layor2");
//     //     });
//     //   });
  
    return (
        <div>
            <div className="main">
                <h1>ABOUT ME </h1>
                <div className="row">
                    <div className="img"></div>
                    <div className="intro">
                        <p>I am Fakhra.Daughter of Chaudhary Muhammad Aslam. I am a Developer and aim to work as a Full Stack developer for which currently I'm trying to pursue a vacancy for a front end associate-level developer. I live in Sialkot. I will happy to mention I love this city as it's my home town. I have done my matriculation from Govt BaraPathr Sialkot School.ICS from Nisa Girls Colleges Sialkot and Bachlores in Computer Science from Govt College Women University Sialkot </p>
                    </div>


                </div>
            </div>
            {/*other about me details */}
            <div className="about-details">

                <div className="col">
                    <img src={planeSurface} alt="" id="aboutDetailsId" />
                    <div class="layor">
                        <h3>EDUCATION</h3>

                    </div>
                    <div className="" id="aboutdetailsListId">
                        <ul>
                            <li>Metric Bio Sci.</li>
                            <li>Inter  ICS </li>
                            <li>BS in Computer Sci.</li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <img src={planeSurface} alt="" id="aboutDetailsId"/>
                    <div class="layor">
                        <h3>HOBIES</h3>
                    </div>
                    <div className="" id="aboutdetailsListId">
                        <ul>
                            <li>urdu Fiction Writing </li>
                            <li>Urdu Lit. Reading</li>
                            <li>Programming</li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <img src={planeSurface} alt="" id="aboutDetailsId"/>
                    <div class="layor">
                        <h3>Strengths</h3>
                    </div>
                    <div className="" id="aboutdetailsListId">
                        <ul>
                            <li>Dedicated</li>
                            <li>Coperative</li>
                            <li>Fst Learner</li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <img src={planeSurface} alt="" id="aboutDetailsId"/>
                    <div class="layor">
                        <h3>WEAKNESS</h3>

                    </div>
                    <div className="" id="aboutdetailsListId">
                        <ul>
                            <li>introvert</li>
                        </ul>
                    </div></div>
            </div>

        </div>


    )
}
export default About;