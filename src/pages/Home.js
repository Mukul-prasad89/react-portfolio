import React from "react";
import image from '../assets/profile.jpeg';
import AutoType from "../components/AutoType";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import GradientText from './GradientText'

const Home = () => {
    

    return (
        <div className="home-page margin">
            <div className="home-content blob-wrapper ">
                <div className="blob" >
                    <img
                        src={image}

                        className="home-image blob-image"
                    />
                </div>
                <div className="description">

            


                    <h1 className="heading">MUKUL PRASAD</h1>
                    
                     <AutoType /> 
                     <br></br>
                    <br></br>
                    <p className="para">I'm Mukul, a skilled and creative frontend developer with a passion for creating beautiful, responsive, and user-friendly websites. I've worked on a variety of web projects, ranging from a simple calculator,ToDo App,random joke to food delivery platforms.

                    </p>
                    <br></br>
                    <ul className="social-links">
                        <a href="https://www.linkedin.com/in/mukul-prasad-0917122a6/"><FaLinkedin /></a>
                        <a href="https://github.com/Mukul-prasad89"><FaGithub /></a>
                        <a href="https://www.instagram.com/__main__mukul__?igsh=MXhubmVoc3I0NXZodg=="><FaInstagram /></a>
                        <a href="mailto:mukulprasad89@gmail.com"><MdEmail /></a>
                        <a href="https://x.com/MukulPrasad19"><FaTwitter /></a>
                    </ul>
                </div>

            </div>
        </div>

    );
}

export default Home;