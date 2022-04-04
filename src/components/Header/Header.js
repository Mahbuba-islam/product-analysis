
import React from 'react';
import {NavLink , useLocation} from "react-router-dom";
import './Header.css'

const Navbar = () => {
   const {pathname} = useLocation()
   
    return (
        
            <nav className='navbar'
             style={
                 pathname.includes("Blog")? {display:'none'}: {display:'flex'}
                 } > 
                <div>
                    picture
                </div>
                <div className="link-container">
                <NavLink className={({isActive})=> isActive ? 'active-link' : 'link'} to = '/Home'>Home</NavLink>
                <NavLink className={({isActive}) => isActive? 'active-link' : 'link'} to = '/Reviews'>Reviews</NavLink>
                <NavLink className ={({isActive}) => isActive? 'active-link' : 'link'}  to = '/Dashboard'>Dashboard</NavLink>
                <NavLink className ={({isActive}) => isActive? 'active-link' : 'link'}  to = '/Blogs'>Blogs</NavLink>
                <NavLink className ={({isActive}) => isActive? 'active-link' : 'link'}  to = '/About'>About</NavLink>
                </div>
            </nav>
    
    );
};

export default Navbar;