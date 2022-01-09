import React from "react";

const Nav = (props) => {
    return(
        <header className="flex-row px-1">
            <h2>
                John Harris III
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={() => props.setActiveDisplay("About")}>
                            About Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#portfolio" onClick={() => props.setActiveDisplay("Portfolio")}>
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#contact" onClick={() => props.setActiveDisplay("Contact")}>
                            Contact Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#resume" onClick={() => props.setActiveDisplay("Resume")}>
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;