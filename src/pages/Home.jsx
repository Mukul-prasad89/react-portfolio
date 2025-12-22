import React from "react";
import image from '../assets/profile.jpeg';
import AutoType from "../components/AutoType";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import GradientText from './GradientText'

const Home = () => {
    

    return (
        <div className="home-page margin">
            <div className="home-content">
                <div className="profile-container">
                    <img
                        src={image}
                        alt="Mukul Prasad"
                        className="home-image"
                    />
                </div>
                <div className="description">

            


                    <h1 className="heading">MUKUL PRASAD</h1>
                    
                     <AutoType /> 
                     <br></br>
                    <p className="para">I'm Mukul, a skilled and creative MERN stack developer with a passion for creating beautiful, responsive, and user-friendly websites. I've worked on a variety of web projects.

                    </p>
                    <ul className="social-links">
                        <a href="https://www.linkedin.com/in/mukul-prasad-0917122a6/"><FaLinkedin /></a>
                        <a href="https://github.com/Mukul-prasad89"><FaGithub /></a>
                        <a href="https://www.instagram.com/__main__mukul__?igsh=MXhubmVoc3I0NXZodg=="><FaInstagram /></a>
                        <a href="mailto:mukulprasad89@gmail.com"><MdEmail /></a>
                        <a href="https://x.com/MukulPrasad19"><FaXTwitter /></a>
                    </ul>
                </div>

            </div>
        </div>

    );
}

export default Home;