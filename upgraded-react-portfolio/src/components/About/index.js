import React from "react";
import profilePic from "../../assets/images/profile/profile-pic.jpg"

const About = () => {
    return(
        <section className="about-me">
            <h1 id="about">About Me</h1>
            <img src={profilePic} alt="Profile" style={{width: "300px", height:"auto"}}/>
            <p>Lorem Ipsum</p>
        </section>
    );
}

export default About;