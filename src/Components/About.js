import { useEffect } from "react";
import $ from "jquery";
import planeSurface from "../Images/planeSurface.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "aos/dist/aos.css";
import AOS from "aos";

const About = () => {

useEffect(()=>{
    AOS.init({
        
        duration : 2000
      });
},[])
function displayDetails1(){

    document.querySelectorAll("#education").forEach((x)=>{
        if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
    })
 
}
function displayDetails2(){

    document.querySelectorAll("#hobies").forEach((x)=>{
        if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
    })
 
}function displayDetails3(){

    document.querySelectorAll("#strengths").forEach((x)=>{
        if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
    })
 
}function displayDetails4(){

    document.querySelectorAll("#weekness").forEach((x)=>{
        if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
    })
 
}

    return (
        <div className="sec">
            <div className="main">
                <h1>ABOUT ME </h1>
                <div className="row">
                    <div className=" check img"></div>
                    <div className="intro">
                        <p>I am Fakhra.Daughter of Chaudhary Muhammad Aslam. I am a Developer and aim to work as a Full Stack developer for which currently I'm trying to pursue a vacancy for a front end associate-level developer. I live in Sialkot. I will happy to mention I love this city as it's my home town. I have done my matriculation from Govt BaraPathr Sialkot School.ICS from Nisa Girls Colleges Sialkot and Bachlores in Computer Science from Govt College Women University Sialkot </p>
                    </div>


                </div>

            </div>
            <div className="main-details" >
                <div className="grids edu" onClick={displayDetails1} data-aos="fade-left"><p>Education</p>
                    <div style={{ display: "none",color:" #856088"}} id="education">
                        <ul>
                            <li>Metric Bio Sci.</li>
                            <li>Inter  ICS </li>
                            <li>BS in Computer Sci.</li>
                        </ul>
                    </div>
                    </div>
                <div className="grids hobies" onClick={displayDetails2} data-aos="fade-right"><p>Hobies</p>
                    <div style={{ display: "none",color:" #856088"}} id="hobies">
                        <ul>
                            <li>urdu Fiction Writing </li>
                            <li>Urdu Lit. Reading</li>
                            <li>Programming</li>
                        </ul>
                    </div></div>
                <div className="grids Strengths" onClick={displayDetails3} data-aos="fade-left" ><p>Strengths</p>
                    <div style={{ display: "none",color:" #856088"}} id="strengths">
                        <ul>
                            <li>Dedicated</li>
                            <li>Coperative</li>
                            <li>Fast Learner</li>
                        </ul>
                    </div></div>
                <div className="grids weekness" onClick={displayDetails4} data-aos="fade-right"><p>Weakness</p>
                    <div style={{ display: "none",color:" #856088"}} id="weekness">
                        <ul>
                            <li>introvert</li>
                        </ul>
                    </div></div>
            </div>
            {/*this is code of about me further details */}
            {/* <div className="about-details">

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
            </div> */}

        </div>


    )
}
export default About;