import React, { useRef, useEffect, useCallback, useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import {NavbarList, NavbarList1, MainModal} from './ActiveList';
import {NavbarData1, NavbarData2, MainModalData} from '../data';
import {handleTheme} from "./Utils";
import { useAuth } from "../context/auth";
import { useUserAuth } from '../context/UserAuthContext';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Navbar = () => {
    const [selected, setSelected] = useState("");
    const [showModal, setShowModal] = useState(true);
    const [navbarChange, setNavbarChange] = useState(false);
    const [user, setUser] = useState('');
    const {RealUser, logOut} = useUserAuth();

    const modalRef = useRef();
  const auth= useAuth()

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
     //   console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
  
   const handleShowModal = () => {
       setShowModal(!showModal);
   }
   const handledropdown = () => {
      auth.login(user);
      setUser("Admin");
   }
   const navigate = useNavigate()
   const handleLogout = async () => {
     if(RealUser){
       try {
        await logOut();
        auth.logout();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
     }else{
       auth.logout();
       navigate('/')
     }
   }
   
   useEffect(()=>{
    if (window.location.href.indexOf("projects") > -1) {
        setNavbarChange(true);
      }
    if (window.location.href.indexOf("login") > -1) {
        setNavbarChange(true);
      }
}, [navbarChange])
var settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

    return (
        <header className="header" id="header">
        <nav className="nav container">
            <Link to="/" className="nav__logo"><span className="nav__logo1">Big</span>Yusufff</Link>
            <div className={navbarChange ? "nav__menu nav__menu-width" : "nav__menu"}>
                <ul className="nav__list">
                  {navbarChange ? (
                      <>
                        {NavbarData2.map((e) =>(
                          <NavbarList1 key= {e.id} id={e.id} icon={e.icon} titleRef={e.titleRef} active ={selected === e.id} setSelected={setSelected}/>
                        ))}
                      </>
                    ):(
                      <>
                        {NavbarData1.map((e) =>(
                          <NavbarList key= {e.id} id={e.id} icon={e.icon} titleRef={e.titleRef} active ={selected === e.id} setSelected={setSelected}/>
                        ))}
                      </>
                    )
                  }
                </ul>
            </div>
                {/* Theme change button */}
               
                <div className="nav__icon">
                  
                  {!auth.user ? (
                    <>
                      <i className="bx bx-info-circle change-theme"onClick={handleShowModal}></i>
                      <i className="bx bx-moon change-theme"onClick={handleTheme} id="theme-button"></i>
                      <span className="nav__demo"onClick={handledropdown}>
                        Demo Login
                      </span>
                    </>
                  ) : (
                <div className="dropdown">
                  <p className="nav__logo1">{RealUser ? "Real " :"Demo "} Admin{' '}
                    <i className="bx bx-caret-down"></i>
                  </p>
                  <ul className="dropdown-contents">
                    {!RealUser &&
                    <>
                      <li  className="dropdown-list">
                        <i className="bx bx-plus change-theme"></i>
                        <Link className="dropdown-link" to="/login">Real Admin</Link>
                      </li>
                    </>}
                    <li  className="dropdown-list"onClick={handleShowModal}>
                      <i className="bx bx-info-circle change-theme"></i>
                      <Link className="dropdown-link" to="#">Show Help</Link>
                    </li>
                    <li  className="dropdown-list"onClick={handleTheme}>
                      <i className="bx bx-moon change-theme" id="theme-button"></i>
                      <Link className="dropdown-link" to="#">Background</Link>
                      
                    </li>
                    {RealUser &&
                    <>
                      <li  className="dropdown-list">
                        <i className="bx bx-plus change-theme"></i>
                        <Link className="dropdown-link" to="#">Testimonial client</Link>
                      </li>
                    </>}
                    
                    <li  className="dropdown-list">
                      <i className="bx bx-plus change-theme"></i>
                      <Link className="dropdown-link" to="/projects">Project Manager</Link>
                    </li>
                    <li  className="dropdown-list"onClick={handleLogout}> 
                      <i className="bx bx-log-out change-theme"></i>
                      <Link className="dropdown-link" to="#">Sign Out</Link>
                    </li>
                  </ul>
                </div>
              )}
                 
                  {/* <i className="button button--ghost">Demo Login</i>*/}
                {/* show home modal*/}
                <div className={showModal ? "home__modal active-modal" : "home__modal"} onClick={closeModal} ref={modalRef}>
                  <div className="home__modal-content">
                    <Slider {...settings}>
                    <i className="bx bx-x home__modal-close" onClick={() => setShowModal(prev => !prev)}></i>
                      {MainModalData.map((item) =>(
                        
                        <MainModal
                        id={item.id} title={item.title}
                        logo={item.logo} desc={item.desc}
                        l1={item.l1} l2={item.l2} l3={item.l3}
                        />
                        
                        ))}
                      
                    </Slider>
                  </div>
                </div>
                  
            </div>
        </nav>
    </header>
    )
}

export default Navbar;