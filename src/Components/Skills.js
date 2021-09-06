import { useEffect } from "react";
import {
    cart_project, covid_project, news_project, portfolio_project, todo_project, university_project, expenseTracker_project
} from "../Images/index";
import "aos/dist/aos.css";
import AOS from "aos";
const Skills = () => {
  
        useEffect(()=>{
            AOS.init({
                duration : 2000,
                disable: function() {
                    var maxWidth = 700;
                    return window.innerWidth > maxWidth;
                  }
              });
            if (window.innerWidth < 700) {
                // var testclasses = document.getElementsByClassName("test");
                // if(testclasses!=null){
                //     for(var i=0; i<=testclasses.length;i++) {    
                //         testclasses[i].classList.remove("main-grid2");
                //         testclasses[i].classList.add("main-grid");
                //     }
                // }
            
                document.querySelectorAll(".test").forEach((item)=>{
                    
                    item.classList.remove("main-grid2");
                    item.classList.add("main-grid");
                })
            }
        },[])
        
 
    
    
        return (
        <div className="skills">
            <h3>Technologies I'm working with</h3>
            <hr />
            <div className="main-techs-parent">
                <div className="main-techs">
                    <div className="one tech smallscr"><p>Tech set 1</p></div>
                    <div className="verticalLine"></div>
                    <div className=" tech-details"><p>The Techs curruntly i m working with  <span className="format-skills">Reacts js, Html5, Javascript, CSS3 and Material ui</span><br /><span style={{ fontSize: "16px", textDecoration: "underline", color: "#F26B8A" }}> Experience:</span><br />being fresh graduate ,i have completed my own small projects which are listed below</p></div>
                    <div className="four tech smallscr"><p>Tech set 2</p></div>
                    <div className="verticalLine"></div>
                    <div className="tech-details"><p>The Techs supporting above stack and i have basic knowledge in:<span className="format-skills">Kubernetes, Docker, Graphql, Cloud computing</span>Other techs i have  basic knowledge in <span className="format-skills">C#, Java, mySql,python</span></p></div>
                    <div className="seven tech smallscr"><p>Non tech</p></div>
                    <div className="verticalLine"></div>
                    <div className=" tech-details"><p><br /><br />The skills other than these techs are :<span className="format-skills" > Urdu content writing, SEO ,Animation video making(doodles). </span></p></div>
                </div>
            </div>
            <div>
                <h3 >Projects</h3>
                <hr />
                <div className="projects-detail main-techs-parent" data-aos="fade-up">
                    <div className=" main-grid2 test" id="one">
                        <div className="project-image "><img src={university_project} /><h3>University project</h3></div>
                        <div className="project-details"> <a href="">Project on github</a><br />
                            <a href=""> project deployed on netlify </a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, laborum praesentium! Fugit ex eius
                                recusandae
                                eaque! Sit vitae voluptates id tempore accusantium saepe molestiae, ratione dolorum dolore harum at
                                autem.</p></div>
                    </div>

                    <div className=" main-grid2 test" id="two" data-aos="fade-up">
                        <div className="project-image"><img src={expenseTracker_project} /><h3>Expence Tracker project</h3></div>
                        <div className="project-details">
                            <a href="">Project on github</a><br />
                            <a href=""> project deployed on netlify </a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, laborum praesentium! Fugit ex eius
                                recusandae
                                eaque! Sit vitae voluptates id tempore accusantium saepe molestiae, ratione dolorum dolore harum at
                                autem.</p>
                                 </div>
                                 </div>


                    <div className=" main-grid2 test" data-aos="fade-up">
                        <div className="project-image" ><img src={cart_project} /><h3>Add to Cart project</h3></div>
                        <div className="project-details">
                            <a href="">Project on github</a><br />
                           <a href=""> project deployed on netlify </a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, laborum praesentium! Fugit ex eius
                                recusandae
                                eaque! Sit vitae voluptates id tempore accusantium saepe molestiae, ratione dolorum dolore harum at
                                autem.</p>
                                </div>
                                </div>

                    <div className=" main-grid2 test" data-aos="fade-up">
                        <div className="project-image"><img src={news_project} /><h3>News Blog Project</h3> </div>
                        <div className="project-details">
                            <a href="">Project on github</a><br />
                            <a href=""> project deployed on netlify </a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, laborum praesentium! Fugit ex eius
                                recusandae
                                eaque! Sit vitae voluptates id tempore accusantium saepe molestiae, ratione dolorum dolore harum at
                                autem.</p>
                                </div>
                                </div>

                    <div className=" main-grid2 test" data-aos="fade-up">
                         <div className="project-image"><img src={covid_project} /><h3>Covid Tracker project</h3></div>
                        <div className="project-details">
                            <a href="">Project on github</a><br />
                            <a href=""> project deployed on netlify </a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, laborum praesentium! Fugit ex eius
                                recusandae
                                eaque! Sit vitae voluptates id tempore accusantium saepe molestiae, ratione dolorum dolore harum at
                                autem.</p>
                                </div>
                                </div>

                    <div className=" main-grid2 test" data-aos="fade-up">
                        <div className="project-image"><img src={todo_project} /><h3>to-do List project</h3> </div>
                        <div className="project-details">
                            <a href="">Project on github</a><br />
                            <a href=""> project deployed on netlify </a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, laborum praesentium! Fugit ex eius
                                recusandae
                                eaque! Sit vitae voluptates id tempore accusantium saepe molestiae, ratione dolorum dolore harum at
                                autem.</p>
                                </div>
                                </div>

                    <div className=" main-grid2 test" data-aos="fade-up" > 
                     <div className="project-image"><img src={portfolio_project} /><h3>Port folio project</h3></div>
                        <div className="project-details">
                            <a href="">Project on github</a><br />
                            <a href=""> project deployed on netlify </a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, laborum praesentium! Fugit ex eius
                                recusandae
                                eaque! Sit vitae voluptates id tempore accusantium saepe molestiae, ratione dolorum dolore harum at
                                autem.</p>
                                </div>
                                </div>
                </div>
            </div>
        <br/> <br/>
        </div>
    )
}
export default Skills;