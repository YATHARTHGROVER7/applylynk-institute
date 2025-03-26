"use client"

import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
const Sidebar = () => {

    return (<>
        <div className="app-menu navbar-menu">
            <div id="scrollbar">
            <div className="container-fluid">

            <div id="two-column-menu">
            </div>
            <ul className="navbar-nav" id="navbar-nav">
                        <li className="menu-title"><span data-key="t-menu">Menu</span></li>
                        <li className="nav-item">
                            <a href ="/dashboard" className="nav-link menu-link" >
                                <i className="ri-home-3-line"></i> <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href ="/dashboard" className="nav-link menu-link" >
                                <i className="ri-home-3-line"></i> <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href ="/dashboard" className="nav-link menu-link" >
                                <i className="ri-home-3-line"></i> <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href ="/dashboard" className="nav-link menu-link" >
                                <i className="ri-home-3-line"></i> <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href ="/dashboard" className="nav-link menu-link" >
                                <i className="ri-home-3-line"></i> <span>Dashboard</span>
                            </a>
                        </li>
                    </ul>
                    </div>
            </div>
        </div>
    </>)
}


export default Sidebar