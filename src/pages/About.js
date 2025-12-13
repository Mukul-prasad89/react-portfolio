import React from "react";
import { motion } from "framer-motion";
import image from  "../assets/profile2.jpeg";

const About = () => {
    
    return (
        <div className="about-section margin">
           
            <div className="about-section-contents">
                <h1 className="about-heading">
                    About Me
                </h1>
                <img  className="about-image" src={image}></img>
                
                <h1 className="about-name">Mukul Prasad</h1>
                <br></br>
                <h4 className="about-role">Frontend Developer | Web Designer | UI/UX Enthusiast</h4>
                <div className="divider"></div>



                <p className="about-description"
                    
                >
                    I am a third-year Computer Science Engineering student specializing in Data Science.
                    I have hands-on experience in building practical web applications including a <srtong> Food Delivery app,
                    simple calculator,ToDo List and a random joke generator.</srtong> These projects demonstrate my skills
                    in front-end development and basic backend integration.
                    <br /><br />
                    I have solid hands-on experience working with core topics such as Arrays, Strings, Linked Lists,
                    Stacks, Queues, Trees, Binary Search Trees, Heaps, and HashMaps. These problem-solving skills
                    have strengthened my logical thinking and coding efficiency.
                    <br /><br />
                    Currently, I am expanding my expertise in backend technologies, learning Node.js, Express, REST APIs,
                    and other modern frameworks to build scalable and efficient web applications. With a strong foundation
                    in Data Structures & Algorithms, I am passionate about developing data-driven, user-centric solutions
                    and continuously improving my technical and problem-solving skills.
                </p>

               

                <div className="about-buttons">
                    <a
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
