import React from 'react';
import {Link} from "react-router-dom";


const About = ({highlightdesc, highlightexp, highlightwork, highlightsupport}) => {
    return (
        <div>
            {/* ========================== about=========================== */}
        <section className="about section"id="about">
        <span className="section__subtitle">My Intro</span>
        <h2 className="section__title">About Me</h2>
        <div className="about__container container grid">
            <img src="/image/pic-3.png" alt=""id ="aboutbox" className="about__img"/>
            <div className="about__data">
                <div className="about__info">
                    <div className={highlightexp ? "about__box active" : "about__box"}>
                        <i className="bx bx-award about__icon"></i>
                        <h3 className="about__title">Experience</h3>
                        <span className="about__subtitle">3 Years Working</span>
                    </div>
                    <div className={highlightwork ? "about__box active" : "about__box"}>
                        <i className=" bx bx-briefcase-alt about__icon"></i>
                        <h3 className="about__title">Completed</h3>
                        <span className="about__subtitle">44 + Projects</span>
                    </div>
                    <div className={highlightsupport ? "about__box active" : "about__box"}>
                        <i className="bx bx-support about__icon"></i>
                        <h3 className="about__title">Support</h3>
                        <span className="about__subtitle">Online 24/7</span>
                    </div>
                </div>
                <p className={highlightdesc ? "about__description active": "about__description"}>
                    Frontend devevloper, I create web pages with UI / UX swdefgh sdfghj sdfgh sdfgh sdfv
                </p>
                <Link to="#contact" className="button">Contact Me</Link>
            </div>

        </div>
    </section>
    </div>
    )
}

export default About
