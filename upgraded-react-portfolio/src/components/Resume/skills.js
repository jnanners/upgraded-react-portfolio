import React from "react";
import { FaHtml5, FaCss3, FaNode, FaReact, FaAngular } from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io";
import {SiMysql, SiMongodb} from "react-icons/si"

const skills = [
    {
        name: "HTML",
        icon: <FaHtml5 style={{fontSize: "2rem"}} />
    },
    {
        name: "CSS",
        icon: <FaCss3 style={{fontSize: "2rem"}} />
    },
    {
        name: "Node",
        icon: <FaNode style={{fontSize: "2rem"}} />
    },
    {
        name: "React",
        icon: <FaReact style={{fontSize: "2rem"}} />
    },
    {
        name: "Angular",
        icon: <FaAngular style={{fontSize: "2rem"}} />
    },
    {
        name: "JavaScript",
        icon: <IoLogoJavascript style={{fontSize: "2rem"}} />
    },
    {
        name: "MySQL",
        icon: <SiMysql style={{fontSize: "2rem"}} />
    },
    {
        name: "MongoDB",
        icon: <SiMongodb style={{fontSize: "2rem"}} />
    }
];

export default skills;