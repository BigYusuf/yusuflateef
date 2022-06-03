import React from 'react';
import { animated } from 'react-spring';
import {Link} from "react-router-dom";


export const WorkList = ({id, title, active, setSelected}) => {
    return (
        <span className={active ? "work__item active-work" : "work__item"} onClick={() => setSelected(id)} >{title}</span>
    )
}

export const NavbarList = ({id, icon, titleRef, active, setSelected}) =>{
    return (
        <li className="nav__item" key = {id}>
            <a href={titleRef} className={active ? "nav__link active-link" : "nav__link"} 
            onClick={() => setSelected(id)}>
                <i className={icon}></i>
            </a>
        </li>
    )
}
export const NavbarList1 = ({id, icon, titleRef, active, setSelected}) =>{
    return (
        <li className="nav__item" key = {id}>
            <Link to={titleRef} className={active ? "nav__link active-link" : "nav__link"} 
            onClick={() => setSelected(id)}>
                <i className={icon}></i>
            </Link>
        </li>
    )
}
export const ModalList = ({id, title, active, setSelected}) =>{
    return (
        <div className="services__card"key = {id}>
            <h3 className="services__title">{title} <br/> Designer</h3>
            <span className="services__button"onClick={() => setSelected(id)}> See more
                <i className="bx bx-right-arrow-alt services__icon"></i>
            </span> 
            {/*showModal && <div className="services__modal active-modal">*/}
            <div  className={active ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                <i className="bx bx-x services__modal-close" onClick={() => setSelected(prev => !prev)}></i>
                <h3 className="services__modal-title">{title} designer</h3>
                <p className="services__modal-description">
                    Service with more than 3 years of experience.
                    Providing quality work to clients and companies
                </p>
                </div>
            </div>
        </div>
    )
}
export const WorkModal = ({id, design, demo, github, desc, frontend, backend, title, img, current, prevSlide, nextSlide, active, setShowModal,animation, closeModal, modalRef, images}) =>{
    return (
        <div className="work__card" key={id}>
        <Link to="#" onClick={() => setShowModal(id)}>
            <img src={img} alt="" className="work__img"/>
        </Link>

        <h3 className="work__title">{title}</h3>
        <Link to="#" onClick={() => setShowModal(id)} className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__icon"></i>
        </Link>
            <div className={active ? "work__modal active-modal" : "work__modal"} onClick={closeModal} ref={modalRef}>
                <animated.div style={animation}>
                    <div className="work__modal-content">
                    <i className="bx bx-x work__modal-close" onClick={() => setShowModal(prev => !prev)}></i>
                    <div className="work__modal-contentUp">
                    <h3 className="work__modal-title">{title}</h3>
                    </div>
                    <div className="work__modal-contentDown">
                        <div className="work__modal-left">
                        <i className="bx bx-left-arrow work__modal-icon" onClick={prevSlide} ></i>
                
                            <div className="wrapper__img">
                                {images.map((e, index)=> {
                                    return( 
                                        <div key={index} className={index === current ? 'slide active': 'slide'}>
                                            {index === current && (<img  src={e} alt="" className="work__modal-image"/>)}
                                        </div>
                                    )
                                })}
                            </div>
                        <i className="bx bx-right-arrow work__modal-icon" onClick={nextSlide}></i>
                        </div>
                        <div className="work__modal-right">
                            <p className="work__modal-description">
                                {desc}
                            </p>
                            <ul className="work__modal-list">
                                <li className="work__modal-item">
                                    <i className="bx bx-check work__modal-icon"></i>
                                    <p className="work__modal-info">Frontend: {frontend} </p>
                                </li>
                                <li className="work__modal-item">
                                    <i className="bx bx-check work__modal-icon"></i>
                                    <p className="work__modal-info">Backend: {backend} </p>
                                </li>
                                <li className="work__modal-item">
                                    <i className="bx bx-check work__modal-icon"></i>
                                    <p className="work__modal-info">
                                        Design & Planning: {design}
                                    </p>
                                </li>
                            </ul>
                            <div className="work__modal-buttonGroup">
                                <a href={github} className="work__button">
                                    Codes <i className="bx bx-right-arrow-alt work__icon"></i>
                                </a>
                                <a href={demo} className="work__button">
                                    Demo <i className="bx bx-right-arrow-alt work__icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </animated.div>
            </div>
         </div>
    
    )
}

export const ServicesList =({id, title1, title2, description, li1, li2, li3, active, setSelected }) => {
    return(
        <div className="services__card" key = {id}>
                    <h3 className="services__title">{title1} <br/> {title2}</h3>
                    <span onClick={() => setSelected(id)} className="services__button"> See more
                        <i className="bx bx-right-arrow-alt services__icon"></i>
                    </span> 
                    <div className={active ? "services__modal active-modal" : "services__modal "}>
                        <div className="services__modal-content">
                            <i className="bx bx-x services__modal-close"></i>
                            <h3 className="services__modal-title">{title1} {title2}</h3>
                            <p className="services__modal-description">
                                {description}
                            </p>
                            <ul className="services__modal-list">
                                <li className="services__modal-item">
                                    <i className="bx bx-check services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        {li1}
                                    </p>
                                </li>
                                <li className="services__modal-item">
                                    <i className="bx bx-check services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        {li2}
                                    </p>
                                </li>
                                <li className="services__modal-item">
                                    <i className="bx bx-check services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        {li3}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

    )
}

export const AddProjectModal = ({addworkModal, setAddworkModal, modalRef }) => {
    return(
        
        <div className={addworkModal ? "home__modal active-modal" : "home__modal"} onClick={()=> setAddworkModal(false)} ref={modalRef}>
        <div className="home__modal-content">
          <i className="bx bx-x home__modal-close"onClick={() => setAddworkModal(prev => !prev)}></i>
          <h3 className="home__modal-title"><span className="bx bx-microphone"></span> Add Project</h3>
          <p className="home__modal-description">
          Use aaaaaadd work <span className="bx bx-microphone"></span> to control website.
              You can perform task like
          </p>
            <ul className="home__modal-list">
              <li><span className="bx bx-check"></span>Navigation: Go home/ scroll to top/ contact</li>
              <li><span className="bx bx-check"></span>Interaction: Tell me about Yusuf/ switch background</li>
              <li><span className="bx bx-check"></span>conversation like AI portfolio</li>
            </ul>
        </div>
      </div>

    )
}

export const MainModal = ({id, title, logo, desc, l1, l2, l3}) => {
    return(
            <div key={id}>
                <h3 className="home__modal-title"><i className={logo}></i>{title}</h3>
                <p className="home__modal-description">
                {desc}
                </p>
                <ul className="home__modal-list">
                    <li><i className="bx bx-check"></i>{l1}</li>
                    <li><i className="bx bx-check"></i>{l2}</li>
                    <li><i className="bx bx-check"></i>{l3}</li>
                </ul>
            </div>
    )
}
