import React, { useEffect, useState } from 'react';
import ProjectDataService from "./project-firebase";

const Intro = () => {
    const [name, setName]= useState('');
    const [occupation, setOccupation]= useState('');
    const [img, setImg]= useState('');
    const [CV, setCV]= useState('');
    const [lin, setLin]= useState('');
    const [blog, setBlog]= useState('');
    const [git, setGit]= useState('');
    const [dataId, setDataId] = useState("");
    
    
    useEffect(() => {
       setDataId('Details')
        const editDetails = async () => {
            try {
            const docSnap = await ProjectDataService.getFolioDetails();
            const docSnap1 = await ProjectDataService.getFolioLinks();
            setName(docSnap.data().name);
            setImg(docSnap.data().img);
            setOccupation(docSnap.data().occupation);
            setCV(docSnap1.data().CV);
            setLin(docSnap1.data().linkedIn);
            setBlog(docSnap1.data().blog);
            setGit(docSnap1.data().github);
            } catch (error) {}
        };
        if (dataId !== undefined && dataId !== "") {
            editDetails();
          }
       }, [dataId])

    return (
        <div>
                    {/* ========================== Home=========================== */}
            <section className="home section"id="home">
                <div className="home__container container grid">
                    <div className="home__data">
                        <span className="home__greeting">Hello, I'm</span>
                        <h1 className="home__name"> {name}</h1> 
                        <h3 className="home__education">{occupation}</h3> 

                        <div className="home__buttons">
                            <a  target="_blank" rel="noreferrer" href={CV} className="button button--ghost">Download CV</a>
                            <a href="#contact" className="button">connect</a>
                        </div>
                    </div>
                    <div className="home__handle">
                        <img src={img} alt="" className="home__img"/>
                    </div>
                 
                    <div className="home__social">
                        <a target="_blank" rel="noreferrer" href={lin} className="home__social-link">
                            <i className="bx bxl-linkedin-square"></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href={git} className="home__social-link">
                            <i className="bx bxl-github"></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href={blog} className="home__social-link">
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
