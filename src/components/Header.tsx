import React from 'react'

const Header = () => {
    return (
        <div className="top-header-area" id="sticker">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 text-center">
                        <div className="main-menu-wrap">
                            <div className="site-logo">
                                <a href="/">
                                    <img src="assets/img/team/logo.png" alt="" />
                                </a>
                            </div>

                            <nav className="main-menu">
                                <ul>
                                    <li className="current-list-item"><a href="/">Home</a></li>
                                    <li className="current-list-item"><a href="/products">Shop</a></li>
                                    <li className="current-list-item"><a href="#aboutus">About us</a></li>
                                    <li className="current-list-item"><a href="#gallery">Gallery</a></li>
                                    <li className="current-list-item"><a href="#Certificate">Certificate</a></li>

                                </ul>
                            </nav>
                            <a className="mobile-show search-bar-icon" href="#"><i className="fas fa-search"></i></a>
                            <div className="mobile-menu"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header