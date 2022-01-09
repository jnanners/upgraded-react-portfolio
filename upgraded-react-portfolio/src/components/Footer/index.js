import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return(
        <footer>
            <i><a href="https://github.com/john-harris-iii"><FaGithub /></a></i>
            <i><a href="https://www.linkedin.com/in/john-harris-iii-567731183/"><FaLinkedin /></a></i>
        </footer>
    );
}

export default Footer;