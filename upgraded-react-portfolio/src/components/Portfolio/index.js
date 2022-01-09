import React from "react";
import projects from "./projects.json";
import {FaGithub, FaRocket} from "react-icons/fa";

const Portfolio = () => {
    return(
        <section className="portfolio">
            <div>
                <h2>Portfolio</h2>
                <div className="projects">
                    {projects.map((project) => 
                        <div className="project">
                            <img src={require("../../assets/images/apps/" + project.image + ".png")} alt={project.title} style={{width: "300px", height:"auto"}}/>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="icons">
                                    <i><a href={project.app}><FaRocket /></a></i>
                                    <i><a href={project.github}><FaGithub /></a></i>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Portfolio;