import React from "react";
import projects from "./projects.json";
import {FaGithub, FaRocket} from "react-icons/fa";

import Card from "react-bootstrap/Card"

const Portfolio = () => {
    return(
        <section className="portfolio">
            <div>
                <h2>Portfolio</h2>
                <div className="projects">
                    {projects.map((project) => 
                        <Card>
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                                <div className="icons">
                                    <i><a href={project.app}><FaRocket /></a></i>
                                    <i><a href={project.github}><FaGithub /></a></i>
                                </div>
                            </Card.Body>
                            <Card.Img variant="bottom" src={require("../../assets/images/apps/" + project.image + ".png")} alt={project.title} style={{width: "inherit", height:"inherit"}}/>
                        </Card>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Portfolio;