import React from "react";
import profilePic from "../../assets/images/profile/profile-pic.jpg"
import skills from "./skills";

const About = () => {
    return(
        <div>
            <section className="about-me">
                <img id="profile-pic" src={profilePic} alt="Profile"/>
                <h1 id="about">About Me</h1>
                <p>Vanderbilt University Full Stack Web Development Graduate looking to make a career change into the information technology field. I have spent the last 6 months learning the fundamentals of a variety of programming languages, libraries, and concepts. I am looking for a position where I can develop my existing skills while also learning new technologies to further my career in software development.</p>
            </section>
            <div className="skills">
                {skills && skills.map((skill, index) => 
                    <div className="skill" key={index}>
                        {skill.name}
                        <br/>
                        <i>{skill.icon}</i>
                    </div>
                )}
            </div>
        </div>
    );
}

export default About;