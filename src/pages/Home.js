import React from "react";
import image from '../assets/profile.jpeg';
import AutoType from "../components/AutoType";

const Home = () => {
    

    return (
        <div className="home-page ">
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
                </div>

            </div>
        </div>

    );
}

export default Home;