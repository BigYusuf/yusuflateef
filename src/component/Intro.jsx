import React from 'react';
import {Link} from "react-router-dom";

const Intro = () => {
    return (
        <div>
                    {/* ========================== Home=========================== */}
            <section className="home section"id="home">
                <div className="home__container container grid">
                    <div className="home__data">
                        <span className="home__greeting">Hello, I'm</span>
                        <h1 className="home__name"> Yusuf Lateef</h1> 
                        <h3 className="home__education"> Full Stack Developer</h3> 

                        <div className="home__buttons">
                            <Link download="" to="#" className="button button--ghost">Download CV</Link>
                            <a download="" href="#about" className="button">About me</a>
                        </div>
                    </div>
                    <div className="home__handle">
                        <img src="/image/pic-2.png" alt="" className="home__img"/>
                    </div>

                    <div className="home__social">
                        <Link to="https://www.linkedin.com" target="_blank" className="home__social-link">
                            <i className="bx bxl-linkedin-square"></i>
                        </Link>
                        <Link to="https://www.github.com"target="_blank" className="home__social-link">
                            <i className="bx bxl-github"></i>
                        </Link>
                        <Link to="https://www.dribbble.com"target="_blank" className="home__social-link">
                            <i className="bx bxl-dribbble"></i>
                        </Link>
                    </div>
                    <a href="#about" className="home__scroll">
                        <i className="bx bx-mouse home__scroll-icon"></i>
                        <span className="home__scroll-name">Scroll Down</span>
                    </a>
                </div>
            </section>
    
        </div>
    )
}

export default Intro
