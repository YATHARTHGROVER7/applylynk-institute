"use client"; 

import { useState, useEffect, useRef } from 'react';
import userAvtar from '../../assets/images/users/avatar-1.jpg';
// import { logout } from '../../utils/auth';
import logo from '../../assets/images/logo.png'

const Header = () => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null); // ✅ Corrected useRef type

    const handleDropdownToggle = () => {
        setShowDropdown(prevState => !prevState);
    };

    const logOutClick = () => {
        if (window.confirm("Are you sure you want to log out?")) {
            // logout();
            window.location.href='/'
        }
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => { // ✅ Explicitly typed 'event'
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        };

        if (showDropdown) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showDropdown]);

    return (

        <header id="page-topbar">
            <div className="layout-width">
                <div className="navbar-header">
                    <div className="d-flex">
                        {/* <div className="navbar-brand-box horizontal-logo">
                            <a href="/" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src={logo} alt="" height="22" />
                                </span>
                                <span className="logo-lg">
                                    <img src={logo} alt="" height="37" />
                                </span>
                            </a>

                            <a href="/" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src={logo} alt="" height="22" />
                                </span>
                                <span className="logo-lg">
                                    <img src={logo} alt="" height="37" />
                                </span>
                            </a>
                        </div> */}
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="dropdown ms-sm-3 header-item topbar-user" ref={dropdownRef}>
                            <button type="button" className="btn" id="page-header-user-dropdown" onClick={handleDropdownToggle}>
                                <span className="d-flex align-items-center">
                                    {/* <img className="rounded-circle header-profile-user" src={userAvtar} alt="Header Avatar" /> */}
                                    <span className="text-start ms-xl-2">
                                        <h5 className="d-none d-xl-inline-block mb-0 fs-13 fw-bold user-name-text">{process.env.REACT_APP_NAME}</h5>
                                        <span className="d-none d-xl-block mb-0 fs-12 user-name-sub-text">Administrator <i className="ri-arrow-down-s-line"></i></span>
                                    </span>
                                </span>
                            </button>
                            {showDropdown && (
                                <div className="dropdown-menu dropdown-menu-end show" style={{ position: 'absolute', inset: '0px 0px auto auto', margin: '0px', transform: 'translate(0px, 65px)' }}>
                                    <a className="dropdown-item" href="/"><i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Profile</span></a>
                                    <a className="dropdown-item" href="#" onClick={(e) => {
                                        e.preventDefault();
                                        logOutClick();
                                    }}><i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span className="align-middle" data-key="t-logout" >Logout</span></a>
                                </div>
                            )}

                        </div>

                    </div>
                </div>
            </div>
        </header>

    );
};

export default Header;



