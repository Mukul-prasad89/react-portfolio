import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftPreview = () => {
    return (
        <div className="left-preview">
            <div className='left-preview-items '>
                
                    <h2 className='name'>MUKUL<br></br> PRASAD </h2>
                   {/* <h2 className='mobileName'> MUKUL PRASAD</h2> */}
                
                <div >
                    <ul className="links ">
                        <li ><NavLink to='/'> Home </NavLink></li>
                        <li> <NavLink to='/about'>About </NavLink></li>
                        <li><NavLink to='/skills'>Skills </NavLink></li>
                        <li><NavLink to='/projects'>Projects </NavLink></li>
                        <li><NavLink to='/contact'>Contact </NavLink></li>
                    </ul>

                </div>

            </div>



        </div>
    );
}

export default LeftPreview;

