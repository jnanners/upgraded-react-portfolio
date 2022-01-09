import React from "react";
import projects from "./projects.json";

const Portfolio = () => {
    return(
        <section className="portfolio">
            <div>
                <h2>Portfolio</h2>
                <div className="projects">
                    {projects }
                </div>
            </div>
        </section>
    )
}