import React from "react";
import skills from "./skills";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Resume = () => {
    return(
        <section className="resume">
            <div className="skills">
                <h3>Skills</h3>
                {skills && skills.map((skill) => 
                    <div className="skill">
                        {skill.name}
                        <br/>
                        <i>{skill.icon}</i>
                    </div>
                )}
            </div>
            {/* resume like will be added later */}
            <div className="resume">
                <p>Download full resume here:</p>
                <a href="/"><FaCloudDownloadAlt /></a>
            </div>
        </section>
    );
}

export default Resume;