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
                            <a href="#contact" className="button">connect</a>
                        </div>
                    </div>
                    <div className="home__handle">
                        <img src="/image/yusuf1.jpg" alt="" className="home__img"/>
                    </div>
                 
                    <div className="home__social">
                        <a href="https://www.linkedin.com" className="home__social-link">
                            <i className="bx bxl-linkedin-square"></i>
                        </a>
                        <a href="https://www.github.com/bigYusuf" className="home__social-link">
                            <i className="bx bxl-github"></i>
                        </a>
                        <a href="https://www.dribbble.com" className="home__social-link">
                            <i className="bx bxl-dribbble"></i>
                        </a>
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
