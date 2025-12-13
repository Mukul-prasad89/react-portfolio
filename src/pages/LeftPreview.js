import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import { IoIosLaptop } from "react-icons/io";


const LeftPreview = () => {
    return (
        <div className="left-preview">
            <div className='left-preview-items '>
                
                    <h2 className='name'>MUKUL<br></br> PRASAD </h2>
                   {/* <h2 className='mobileName'> MUKUL PRASAD</h2> */}
                
                <div >
                    <ul className="links ">
                        <li ><NavLink to='/'> <span className='react-icons'><IoMdHome /></span><span className="link-text">Home</span> </NavLink></li>
                        <li> <NavLink to='/about'> <span className='react-icons'><FaUser /></span><span className="link-text">About</span> </NavLink></li>
                        <li><NavLink to='/skills'> <span className='react-icons'><FaInfo /></span><span className="link-text">Skills</span> </NavLink></li>
                        <li><NavLink to='/projects'><span className='react-icons'><IoIosLaptop /></span><span className="link-text">Projects</span> </NavLink></li>
                        <li><NavLink to='/contact'> <span className='react-icons'><RiContactsBook3Fill /></span><span className="link-text">Contact</span> </NavLink></li>
                    </ul>

                </div>

            </div>



        </div>
    );
}

export default LeftPreview;

