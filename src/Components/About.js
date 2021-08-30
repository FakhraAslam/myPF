import { useEffect } from "react";
import $ from "jquery";
import planeSurface from "../Images/planeSurface.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const About = () => {
//     var elementIsClicked = false;
//   var element = document.getElementById('eduuuuuuu');
//     if(element!=null){
//         elementIsClicked = true;
//     }

//     if(elementIsClicked){
//         alert("hello");
//         document.getElementById("aboutdetailsListId").classList.add("layor2");
//     }
   

// let element = document.getElementsByClassName("grids");
// let element1 = document.getElementById("grids");
// if(element1!=null && element!=null){
//     element1.addEventListener("mouseover", function( event ) {
//         alert("hovered");
//          // do what you want to do here
//    }, false);
// }

function displayDetails(){
    var x = document.getElementById("education");
    // var y = document.getElementById("hobies");
    // var z = document.getElementById("strength");
    // var a = document.getElementById("weekness");
    
    if(x!=null){
        if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
    }
 
}


    return (
        <div>
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
                <div className="grids edu" onClick={displayDetails} ><p>Education</p>
                    <div className="aboutdetailsListClass" id="education">
                        <ul>
                            <li>Metric Bio Sci.</li>
                            <li>Inter  ICS </li>
                            <li>BS in Computer Sci.</li>
                        </ul>
                    </div></div>
                <div className="grids hobies" onClick={displayDetails} ><p>Hobies</p>
                    <div className="aboutdetailsListClass" id="hobies">
                        <ul>
                            <li>urdu Fiction Writing </li>
                            <li>Urdu Lit. Reading</li>
                            <li>Programming</li>
                        </ul>
                    </div></div>
                <div className="grids Strengths" onClick={displayDetails}><p>Strengths</p>
                    <div className="aboutdetailsListClass" id="strengths">
                        <ul>
                            <li>Dedicated</li>
                            <li>Coperative</li>
                            <li>Fst Learner</li>
                        </ul>
                    </div></div>
                <div className="grids weekness" onClick={displayDetails} ><p>Weakness</p>
                    <div className="aboutdetailsListClass" id="weekness">
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