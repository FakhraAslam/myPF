import { useEffect } from "react";
import {
    cart_project, covid_project, news_project, portfolio_project, todo_project, university_project, expenseTracker_project
} from "../Images/index";
import "aos/dist/aos.css";
import AOS from "aos";
const Skills = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            disable: function () {
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

            document.querySelectorAll(".test").forEach((item) => {

                item.classList.remove("main-grid2");
                item.classList.add("main-grid");
            })
        }
    }, [])




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
                {/* university project, todo project are reamining to add */}

                <div className="projects-detail main-techs-parent" data-aos="fade-up">
                    <div className=" main-grid2 test" data-aos="fade-up" >
                        <div className="project-image"><img src={portfolio_project} /><h3>Port folio project</h3></div>
                        <div className="project-details">
                            <a className="a" target="_blank" href="https://github.com/FakhraAslam/myPF.git">Project on github</a><br />
                            {/* <a href=""> project deployed on netlify </a> */}
                            <p>This is the project "My Portfolio" which is developed with technologies React.js, JavaScript, CSS, HTML.
                                In this project, I used raw CSS only and it is a self-done project. Here I tried to portray my skills which are basic and intermediate yet. this is my latest project and what I learnt is a little more command in CSS also I learnt about aos library
                            </p>
                        </div>
                    </div>
                    <div className=" main-grid2 test" id="one">
                        <div className="project-image "><img src={university_project} /><h3>University project</h3></div>
                        <div className="project-details"> <a className="a" target="_blank" href="https://github.com/FakhraAslam/University_project.git">Project on github</a><br />
                            {/* <a href=""> project deployed on netlify </a> */}
                            <p>This is a project "University project" which is developed with technologies little JavaScript, CSS, HTML. I did it by following the Easy tutorial from YouTube. What I learnt from this project is it enhance my CSS skills. To follow this tutorial was intended to learn CSS, which somehow got succeeded.</p></div>
                    </div>

                    <div className=" main-grid2 test" id="two" data-aos="fade-up">
                        <div className="project-image"><img src={expenseTracker_project} /><h3>Expence Tracker project</h3></div>
                        <div className="project-details">
                            <a className="a" target="_blank" href="https://github.com/seekersforseekers/expence-tracer-practice.git">Project on github</a><br />
                            {/* <a href=""> project deployed on netlify </a> */}
                            <p>This is a project "Expense Tracker" which is developed with technologies React JavaScript, CSS, HTML. I did it by following the Traversary Media from YouTube. This is my very first project with React. At that time it was very difficult to understand the concepts now it's easy to review the project and get an understanding of all concepts .</p>
                        </div>
                    </div>


                    <div className=" main-grid2 test" data-aos="fade-up">
                        <div className="project-image" ><img src={cart_project} /><h3>Add to Cart project</h3></div>
                        <div className="project-details">
                            <a className="a" target="_blank" href="https://github.com/FakhraAslam/AddToCart_PEN.git">Project on github</a><br />
                            {/* <a href=""> project deployed on netlify </a> */}
                            <p>This is a project "Add to Cart" which is developed with technologies  JavaScript, CSS, HTML. I did it by following the Udemy course, then I altered it a little bit with my version. To follow this course was intended to learn Javascript, I got succeeded to learn some.</p>
                        </div>
                    </div>

                    <div className=" main-grid2 test" data-aos="fade-up">
                        <div className="project-image"><img src={news_project} /><h3>News Blog Project</h3> </div>
                        <div className="project-details">
                            <a className="a" target="_blank" href="https://github.com/FakhraAslam/NewWebReact">Project on github</a><br />
                            {/* <a href=""> project deployed on netlify </a> */}
                            <p>This is a project "News Web" which is developed with technologies  React JavaScript, CSS, HTML and  Bootstrap. It is a self-done project, What I learnt from this project is I used APIS. In this project I first time used React Routing.</p>
                        </div>
                    </div>

                    <div className=" main-grid2 test" data-aos="fade-up">
                        <div className="project-image"><img src={covid_project} /><h3>Covid Tracker project</h3></div>
                        <div className="project-details">
                            <a className="a" target="_blank" href="https://github.com/seekersforseekers/Covid-19_Case_Tracker_Application.git">Project on github</a><br />
                            {/* <a href=""> project deployed on netlify </a> */}
                            <p>This is a project "Covid tracker" which is developed with technologies React JavaScript, CSS, HTML. I did it by following the tutorial from YouTube. This is my second project with React. It is the first time when I used API in React. Material UI also used in this project. </p>
                        </div>
                    </div>

                    <div className=" main-grid2 test" data-aos="fade-up">
                        <div className="project-image"><img src={todo_project} /><h3>to-do List project</h3> </div>
                        <div className="project-details">
                            <a className="a" target="_blank" href="https://github.com/FakhraAslam/To-do.git">Project on github</a><br />
                            {/* <a href=""> project deployed on netlify </a> */}
                            <p>This is the project "To-Do" I am using React  JavaScript, CSS, HTML. In this project, I am doing it by myself. Here I am trying to implement some to add the functionality of adding a  to-do task and at very new addition show this on the  UI with updated state, with my own UI style. This is in the implementation phase now.</p>
                        </div>
                    </div>


                </div>
            </div>
            <br /> <br />
        </div>
    )
}
export default Skills;