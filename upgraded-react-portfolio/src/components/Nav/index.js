import React from "react";

const Nav = () => {
    return(
        <header className="flex-row px-1">
            <h2>
                John Harris III
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="/">
                            About Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="/">
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="/">
                            Contact Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="/">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;