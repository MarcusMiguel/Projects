import {useEffect, useRef} from 'react'
import "./About.scss"
import  { FaGithub, FaLinkedin, FaEnvelope }  from 'react-icons/fa';
import {init} from "ityped"; 

export default function About() {
    const textRef = useRef();
    return (
        <div className="about" id="about">
            <div className="card">
                <div className="about-text">
                    <h1>Marcus Miguel</h1>
                    <h3>Junior Developer</h3>
                    <h3>Brazil</h3>
                    <h3>22 years old</h3>
                </div>
                <div className="social-link">
                <a  href="mailto:marcusmiguel0612@gmail.com" target="_blank"><FaEnvelope  size={40}/></a>
                    <a  href="https://github.com/MarcusMiguel" target="_blank"><FaGithub  size={40}/></a>
                    </div>
            </div>
        </div>
    )
}
