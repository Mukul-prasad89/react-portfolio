import React from "react";
import {toast} from "react-toastify";

import image from  "../assets/profile2.jpeg";

const About = () => {
    const download = () => {
        toast.success("Resume Downloaded Successfully!");
    }

    
    
    return (
        <div className="about-section margin">
           
            <div className="about-section-contents">
                <h1 className="about-heading">
                    About Me
                </h1>
                <img  className="about-image" src={image}></img>
                
                <h1 className="about-name">Mukul Prasad</h1>
                <br></br>
                <h4 className="about-role">Full Stack Developer | BlockChain Enthusiast | Vocalist</h4>
                <div className="divider"></div>



                <p className="about-description"
                    
                >
                    I am Full Stack Developer with a strong foundation in Data Structures & Algorithms.
                    <br></br>
                    I have hands-on experience in building practical web applications including a <srtong> CodeTrack,
                    Food Delivery app, and a random joke generator.</srtong> These projects demonstrate my skills
                    in front-end development and backend integration.
                    <br /><br />
                    I have solid understanding of core topics of Data Structures such as Arrays, Strings, Linked Lists,
                    Stacks, Queues, Trees, Binary Search Trees, Heaps, and HashMaps. These problem-solving skills
                    have strengthened my logical thinking and coding efficiency.
                    <br /><br />
                    I have hands-on experience in Web development using React Js, Node Js, Express Js, REST APIs, MongoDB, JavaScript, Tailwind CSS, CSS and HTML. I am currently focused on building scalable systems while strengthening my understanding of System Design and Low-Level Design (LLD). With a solid foundation in Data Structures and Algorithms, I aim to develop efficient, maintainable, and user-centric backend solutions.
                </p>

               

                <div className="about-buttons">
                    <a onClick={() =>{
                        download();
                    }}
                        href={`${process.env.PUBLIC_URL}/Mukul_Resume1.pdf`} download={true}
                        className="btn"
                        
                    >
                        Download Resume
                    </a>
                    <a
                    className="btn"
                        href="https://leetcode.com/u/__Mukul__Prasad89/"
                        
                    >
                        My LeetCode
                    </a>
                    <a
                    className="btn"
                        href="https://www.geeksforgeeks.org/profile/mukulpr5e98"
                        
                    >
                        My GFG
                    </a>
                </div>
            </div>
        </div>

    );
};

export default About;
