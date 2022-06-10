import React from 'react';
import { animated } from 'react-spring';
import {Link} from "react-router-dom";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
    
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
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
                        {/*<i className="bx bx-left-arrow work__modal-icon" onClick={prevSlide} ></i>*/}
                
                            {/*<div className="wrapper__img">
                                {images.map((e, index)=> {
                                    return( 
                                        <div key={index} className={index === current ? 'slide active': 'slide'}>
                                            {index === current && (<img  src={e} alt="" className="work__modal-image"/>)}
                                        </div>
                                    )
                                })}
                            </div>*/}
                            <div className="wrapper__img">
                                <Slider {...settings}>
                    
                                {images.map((e, index)=> {
                                    return( 
                                        
                                        <div key={index} className='slide active'>
                                            <img  src={e} alt="" className="work__modal-image"/>
                                        </div>
                                    )
                                })}
                                </Slider>
                            </div>
                        {/*<i className="bx bx-right-arrow work__modal-icon" onClick={nextSlide}></i>*/}
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

export const CreateTestimonialModal = ({projectpage, formErrors, setProjectpage, form, showModal1, setShowModal1, closeModal, modalRef, image, setImage, title, setTitle, occupation, setOccupation, description, setDescription, addData }) => {
    return(
        
        <div className={showModal1 ? "home__modal active-modal" : "home__modal"} onClick={closeModal} ref={modalRef}>
          <div className= "home__modal-content">
          <i className="bx bx-x home__modal-close" onClick={() => setShowModal1(prev => !prev)}></i>
                   
                <h3 className="home__modal-title">Add new Testimonial</h3>
                <form action="" className="contact__form" ref={form}>
                {projectpage ? (
                    <div className="contact__section1">
                        
                        <div className="contact__form-img"> 
                        <label htmlFor="" className="contact__form-tag">User Image</label>
                            {image ? (
                            <img style={{width:200, height:150}}id="image" 
                            alt="" src={URL.createObjectURL(image)} 
                            />) : (
                                <img style={{width:200, height:150, }}id="image"
                                alt="" src="/image/default-img.png" 
                                />)}
                            <input type="file" id="imagefile"accept="image/*" style={{display:"none"}}
                                onChange={(e) => setImage(e.target.files[0])} />
                                <label htmlFor="imagefile" onChange={(e) => setImage(e.target.files[0])}className="upload-icon">
                                <i className="bx bx-upload"></i>
                                </label>
                        </div>
                        <p className="contact__form-p">{formErrors.image}</p>
                        
                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Name</label>
                            <input
                                type="text" name="name" value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required placeholder="Insert your name" 
                                className="contact__form-input">
                            </input>
                        </div>
                        <p className="contact__form-p">{formErrors.title}</p>
                        
                        <button className="button contact__Send-button" onClick={()=> setProjectpage(false)}>Next</button>
                        </div>
                    ) : (
                    <>
                    <div className="contact__section2">
                            
                        <div className= "contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Occupation</label>
                            <input type="text"name="occupation" value={occupation}
                                onChange={(e) => setOccupation(e.target.value)}
                                required placeholder="Insert your Occupation "
                                className="contact__form-input">
                            </input>
                        </div>
                        <p className="contact__form-p">{formErrors.occupation}</p>
                        
                        <div className="contact__form-div contact__form-area">
                            <label htmlFor="" className="contact__form-tag">What do you think about us</label>
                            <textarea rows="10"required name="description"  value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                id="" col="30" placeholder="Tell us about the experience with us" 
                                type="text" className= "contact__form-input">

                                </textarea>
                        </div>
                        <p className="contact__form-p">{formErrors.description}</p>
                        
                        <div className="contact__form-buttonSection">
                            <button className="button contact__Send-button" onClick={()=> setProjectpage(true)}>Back</button>
                            <button className={"contact__Send-button button"} onClick={addData}>Add Review</button>
                        </div>
                        
                    </div>
                    </>
                           )}
                          
                
                </form>
            </div>
      </div>

    )
}

export const MainModal1 = () => {
    return(
            <div >
                <h3 className="home__modal-title"><i className="bx bx-book"></i>fuck shit</h3>
                <p className="home__modal-description">
                testetr
                </p>
                <ul className="home__modal-list">
                    <li><i className="bx bx-check"></i>aaa</li>
                    <li><i className="bx bx-check"></i>adfghjk</li>
                    <li><i className="bx bx-check"></i>aadddf</li>
                </ul>
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
