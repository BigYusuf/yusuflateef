import React, { useRef, useEffect, useCallback, useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import {NavbarList, NavbarList1, MainModal} from './ActiveList';
import {NavbarData1, NavbarData2, MainModalData} from '../data';
import {handleTheme} from "./Utils";
import { useUserAuth } from '../context/UserAuthContext';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Navbar = ({ navbarChange, setNavbarChange, showModal, setShowModal, header, setHeader }) => {
    const [selected, setSelected] = useState("");
    const {RealUser, logOut} = useUserAuth();

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
      navigate('/login')
   }
   const navigate = useNavigate()
   const handleLogout = async () => {
     if(RealUser){
       try {
        await logOut();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
     }else{
       navigate('/')
     }
   }
   
   const sections = document.querySelectorAll('section[id]');
   useEffect(() => {
     //scroll setting for active link
    function scrollActive(){
         const scrollY = window.pageYOffset;

        sections.forEach(current => {
          const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop -58,
            sectionId = current.getAttribute('id');

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                setSelected(sectionId)
            }
        })
    }
    window.addEventListener('scroll', scrollActive);

   }, [sections])
   
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
        <nav className={!header ? "nav1" : "nav container"}>
            {header &&<Link to="/" className="nav__logo"><span className="nav__logo1">Big</span>Yusufff</Link>}
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
            {header &&  
              <div className="nav__icon">
                
                {!RealUser ? (
                  <>
                    <i className="bx bx-info-circle change-theme"onClick={handleShowModal}></i>
                    <i className="bx bx-moon change-theme"onClick={handleTheme} id="theme-button"></i>
                    <span className="nav__demo"onClick={handledropdown}>
                      Admin Login
                    </span>
                  </>
                ) : (
              <div className="dropdown">
                <p className="nav__logo1">{(RealUser && RealUser.email === process.env.REACT_APP_GUEST_EMAIL) ? "Demo " : "Real "} Admin{' '}
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
                    <Link className="dropdown-link" to="/testimonials">Testimonial client</Link>
                  </li>
                  <li  className="dropdown-list">
                    <i className="bx bx-book change-theme"></i>
                    <Link className="dropdown-link" to="/projects">Project Manager</Link>
                  </li>
                  <li  className="dropdown-list">
                    <i className="bx bx-data change-theme"></i>
                    <Link className="dropdown-link" to="/details">Portfolio Manager</Link>
                  </li>
                  <li  className="dropdown-list"onClick={handleLogout}> 
                    <i className="bx bx-log-out change-theme"></i>
                    <Link className="dropdown-link" to="#">Sign Out</Link>
                  </li>
                </ul>
              </div>
            )}
                
              </div>
            }
            {/* show home modal*/}
            <div className={showModal ? "home__modal active-modal" : "home__modal"} onClick={closeModal} ref={modalRef}>
              <div className="home__modal-content">
                <i className="bx bx-x home__modal-close" onClick={() => setShowModal(prev => !prev)}></i>
                <Slider {...settings}>
                  {MainModalData.map((item) =>(
                    
                    <MainModal
                    key={item.id} id={item.id} title={item.title}
                    logo={item.logo} desc={item.desc}
                    l1={item.l1} l2={item.l2} l3={item.l3}
                    />
                    
                    ))}
                  
                </Slider>
              </div>
            </div>
        </nav>
    </header>
    )
}

export default Navbar;