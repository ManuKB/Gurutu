import React from 'react';
import './NavBar.css';
import { NavBarConfig } from './NavBarConfig';
import { NavBarConfigItem } from '../types';
import { Logout } from '@mui/icons-material';

const NavBar: React.FC<NavBarConfigItem> = ({smallsidebar, name}) => {
    return (
        // <div className={`${smallsidebar ? 'smallsidebar' : 'bigsidebar'} nav`}>
            <div className="slidebar nav">
            <div className="logo">
                <img src={require('../resources/images/logo.jpg')} alt="Logo" />
            </div>
                {
                    NavBarConfig?.map((menu, index) => (
                        <div className={ `menu-items ${name == menu.name ? 'active-menu' : ''}`} onClick={() => {
                            window.location.href = menu.path;} }>  
                           <span>{menu.icon}</span>             
                        <span className="menu-text">{menu.name}</span>   
                        </div>
                    ))
                }
                <div className="menu-items logout" onClick={() => {
                            window.location.href = 'Logout';} }>  
                    <span><Logout></Logout></span>  
                    <span className="menu-text">Logout</span>
                    </div>
        </div>
    );
}


export default NavBar;