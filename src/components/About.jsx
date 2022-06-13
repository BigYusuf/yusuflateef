import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import ProjectDataService from "./project-firebase";


const About = ({highlightdesc, highlightexp, highlightwork, highlightsupport}) => {
    const [desc, setDesc]= useState('');
    const [img, setImg]= useState('');
    const [support, setSupport]= useState('');
    const [experience, setExperience]= useState('');
    const [completed, setCompleted]= useState('');
    const [dataId, setDataId] = useState("");
    
    
    useEffect(() => {
       setDataId('Details')
        const editDetails = async () => {
            try {
            const docSnap = await ProjectDataService.getFolioDetails();
            console.log("the record is :", docSnap.data());
            setDesc(docSnap.data().desc);
            setImg(docSnap.data().img);
            setExperience(docSnap.data().experience);
            setSupport(docSnap.data().support);
            setCompleted(docSnap.data().completed);
            } catch (error) {}
        };
        if (dataId !== undefined && dataId !== "") {
            editDetails();
          }
       }, [dataId])

    return (
        <div>
            {/* ========================== about=========================== */}
        <section className="about section"id="about">
        <span className="section__subtitle">My Intro</span>
        <h2 className="section__title">About Me</h2>
        <div className="about__container container grid">
            <img src={img} alt=""id ="aboutbox" className="about__img"/>
            <div className="about__data">
                <div className="about__info">
                    <div className={highlightexp ? "about__box active" : "about__box"}>
                        <i className="bx bx-award about__icon"></i>
                        <h3 className="about__title">Experience</h3>
                        <span className="about__subtitle">{experience} Years Working</span>
                    </div>
                    <div className={highlightwork ? "about__box active" : "about__box"}>
                        <i className=" bx bx-briefcase-alt about__icon"></i>
                        <h3 className="about__title">Completed</h3>
                        <span className="about__subtitle">{completed} + Projects</span>
                    </div>
                    <div className={highlightsupport ? "about__box active" : "about__box"}>
                        <i className="bx bx-support about__icon"></i>
                        <h3 className="about__title">Support</h3>
                        <span className="about__subtitle">Online {support}</span>
                    </div>
                </div>
                <p className={highlightdesc ? "about__description active": "about__description"}>
                {desc}
                </p>
                <Link to="#contact" className="button">Let's chat</Link>
            </div>

        </div>
    </section>
    </div>
    )
}

export default About
