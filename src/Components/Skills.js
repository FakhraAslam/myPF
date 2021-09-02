import {
    cart_project, covid_project, news_project, portfolio_project, todo_project, university_project, expenseTracker_project
} from "../Images/index";
const Skills = () => {
    return (
        <div className="skills">
            <h3>Technologies I'm interested in</h3>
            <hr />
            <div className="main-techs-parent">
                <div className="main-techs">
                    <div className="one tech smallscr"><p>Tech set 1</p></div>
                    <div className="verticalLine"></div>
                    <div className=" tech-details"><p>The Techs curruntly i m working with :<br /> <span className="format-skills">Reacts js, Html5, Javascript, CSS3 and Material ui</span><br /><span style={{ fontSize: "16px", textDecoration: "underline", color: "#F26B8A" }}>Experience:</span><br />being fresh graduate ,i have completed my own small projects which are listed below</p></div>
                    <div className="four tech smallscr"><p>Tech set 2</p></div>
                    <div className="verticalLine"></div>
                    <div className="tech-details"><p>The Techs supporting above stack and i have basic knowledge in:<br /> <span className="format-skills">Kubernetes, Docker, Graphql, Cloud computing</span><br />Other basic techs <span className="format-skills">C#, Java, mySql,python</span></p></div>
                    <div className="seven tech smallscr"><p>Non tech</p></div>
                    <div className="verticalLine"></div>
                    <div className=" tech-details"><p><br /><br />The skills other than these techs are :<span className="format-skills" > Urdu content writing, SEO ,Animation video makeing(doodles).other than these i m </span></p></div>
                </div>
            </div>
            <div>
                <h3>Projects</h3>
                <hr />
                <div className="projects-detail main-techs-parent">
                    <div className="main-grid">
                        <div className="project-image "><img src={university_project} /></div>
                        <div className="project-details">
                        <a href="">Project on github</a><br />
                            <a href=""> project deployed on netlify </a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, laborum praesentium! Fugit ex eius
                                recusandae
                                eaque! Sit vitae voluptates id tempore accusantium saepe molestiae, ratione dolorum dolore harum at
                                autem.</p></div> 
                    </div>

                    <div className="main-grid">
                        <div className="project-image"><img src={expenseTracker_project} /></div>
                        <div className="project-details">
                            <a href="">Project on github</a><br />
                            <a href=""> project deployed on netlify </a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, laborum praesentium! Fugit ex eius
                                recusandae
                                eaque! Sit vitae voluptates id tempore accusantium saepe molestiae, ratione dolorum dolore harum at
                                autem.</p>
                                 </div>
                                 </div>


                    <div className="main-grid">
                        <div className="project-image"><img src={cart_project} /></div>
                        <div className="project-details">
                            <a href="">Project on github</a><br />
                            <a href=""> project deployed on netlify </a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, laborum praesentium! Fugit ex eius
                                recusandae
                                eaque! Sit vitae voluptates id tempore accusantium saepe molestiae, ratione dolorum dolore harum at
                                autem.</p>
                                </div>
                                </div>

                    <div className="main-grid">
                        <div className="project-image"><img src={news_project} /></div>
                        <div className="project-details">
                            <a href="">Project on github</a><br />
                            <a href=""> project deployed on netlify </a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, laborum praesentium! Fugit ex eius
                                recusandae
                                eaque! Sit vitae voluptates id tempore accusantium saepe molestiae, ratione dolorum dolore harum at
                                autem.</p>
                                </div>
                                </div>

                    <div className="main-grid" >
                         <div className="project-image"><img src={covid_project} /></div>
                        <div className="project-details">
                            <a href="">Project on github</a><br />
                            <a href=""> project deployed on netlify </a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, laborum praesentium! Fugit ex eius
                                recusandae
                                eaque! Sit vitae voluptates id tempore accusantium saepe molestiae, ratione dolorum dolore harum at
                                autem.</p>
                                </div>
                                </div>

                    <div className="main-grid">
                        <div className="project-image"><img src={todo_project} /> </div>
                        <div className="project-details">
                            <a href="">Project on github</a><br />
                            <a href=""> project deployed on netlify </a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, laborum praesentium! Fugit ex eius
                                recusandae
                                eaque! Sit vitae voluptates id tempore accusantium saepe molestiae, ratione dolorum dolore harum at
                                autem.</p>
                                </div>
                                </div>

                    <div className="main-grid"> 
                     <div className="project-image"><img src={portfolio_project} /></div>
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
        </div>
    )
}
export default Skills;