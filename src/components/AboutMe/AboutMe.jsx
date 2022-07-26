import './AboutMe.css'
import {
    FaReact, FaGithub, FaJsSquare, FaJava, FaBitbucket,
    FaAngular, FaNodeJs, FaDocker, FaVuejs, FaDatabase, FaNpm, FaCss3, FaHtml5, FaBootstrap
} from 'react-icons/fa';
import { SiFirebase } from "react-icons/si";

const AboutMe = () => {
    return (
        <div className='about-me'>
            <h2>About Me</h2>
            <hr />
            <div className='text-information'>
                <p>Hello I'm Mariano Guerrero from Buenos Aires, Argentina</p>
                <p>I'm a Ssr Full Stack Developer in Tecso Coop</p>
                <p>I Have experience as Tester Qa and Automation Qa to</p>
                <p>Here are diferent technologies that i used in my daily work</p>
            </div>
            <hr />
            <div className='icons-container'>
                <div className='technologies'>
                    <h3>Languages / Libraries</h3>
                    <FaReact />
                    <FaVuejs />
                    <FaAngular />
                    <FaNodeJs />
                    <FaJava />
                    <FaJsSquare />
                    <FaDatabase />
                    <FaCss3 />
                    <FaHtml5 />
                    <FaBootstrap />
                </div>
                <div className='tools'>
                    <h3>Tools</h3>
                    <FaNpm />
                    <FaDocker />
                    <FaGithub />
                    <FaBitbucket />
                    <SiFirebase />
                </div>
            </div>
        </div>
    )
}

export default AboutMe;