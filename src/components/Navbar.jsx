import React, { useRef, useEffect, useCallback, useState } from 'react';
import {Link} from "react-router-dom";
import {NavbarList} from './ActiveList';
import {NavbarData} from '../data';
import {handleTheme} from "./Utils";


const Navbar = () => {
    const [selected, setSelected] = useState("");
    const [showModal, setShowModal] = useState(true);
    //const [addworkModal, setAddworkModal] = useState(true);
    const [accessBtn, setAccessBtn] = useState(true);

    const modalRef = useRef();


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
      setAccessBtn(!accessBtn);
   }
    return (
        <header className="header" id="header">
        <nav className="nav container">
            <Link to="/" className="nav__logo"><span className="nav__logo1">Big</span>Yusufff</Link>
            <div className="nav__menu">
                <ul className="nav__list">
                     {NavbarData.map((e) =>(
                        <NavbarList key= {e.id} id={e.id} icon={e.icon} titleRef={e.titleRef} active ={selected === e.id} setSelected={setSelected}/>
                     ))}
                </ul>
            </div>
                {/* Theme change button */}
               
                <div className="nav__icon">
                  
                  {accessBtn ? (
                    <>
                      <i className="bx bx-info-circle change-theme"onClick={handleShowModal}></i>
                      <i className="bx bx-moon change-theme"onClick={handleTheme} id="theme-button"></i>
                      <span className="nav__demo"onClick={handledropdown}>Demo Login</span>
                    </>
                  ) : (
                <div className="dropdown">
                  <p className="nav__logo1" >Admin{' '}
                    <i className="bx bx-caret-down"></i>
                  </p>
                  <ul className="dropdown-contents">
                    <li  className="dropdown-list"onClick={handleShowModal}>
                      <i className="bx bx-info-circle change-theme"></i>
                      <Link className="dropdown-link" to="#">Show Help</Link>
                    </li>
                    <li  className="dropdown-list"onClick={handleTheme}>
                      <i className="bx bx-moon change-theme" id="theme-button"></i>
                      <Link className="dropdown-link" to="#">Background</Link>
                      
                    </li>
                    
                    <li  className="dropdown-list">
                      <i className="bx bx-plus change-theme"></i>
                      <Link className="dropdown-link" to="/projects">Add Project</Link>
                    </li>
                    <li  className="dropdown-list">
                      <i className="bx bx-book change-theme"></i>
                      <Link className="dropdown-link" to="/projects">Projects List</Link>
                    </li>
                    <li  className="dropdown-list"onClick={()=> setAccessBtn(prev => !prev)}> 
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
                      <i className="bx bx-x home__modal-close"onClick={() => setShowModal(prev => !prev)}></i>
                      <h3 className="home__modal-title"><span className="bx bx-microphone"></span> Voice Control</h3>
                      <p className="home__modal-description">
                      Use the Microphone button <span className="bx bx-microphone"></span> to control website.
                          You can perform task like
                      </p>
                        <ul className="home__modal-list">
                          <li><span className="bx bx-check"></span>Navigation: Go home/ scroll to top/ contact</li>
                          <li><span className="bx bx-check"></span>Interaction: Tell me about Yusuf/ switch background</li>
                          <li><span className="bx bx-check"></span>conversation like AI portfolio</li>
                        </ul>
                    </div>
                  </div>
                  
            </div>
        </nav>
    </header>
    )
}

export default Navbar