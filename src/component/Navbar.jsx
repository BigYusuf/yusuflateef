import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {NavbarList} from './ActiveList';
import {NavbarData} from '../dummyData';
import {handleTheme} from "./Utils";


const Navbar = () => {
    const [selected, setSelected] = useState("");
    const [tooltip, setTooltip] = useState(false);

    
  //  //scroll setting for active link
    //const sections = document.querySelectorAll('section[id]');
    //function scrollActive(){
      //  const scrollY = window.pageYOffset;

        //sections.forEach(current => {
          //  const sectionHeight = current.offsetHeight,
           //     sectionTop =current.offsetTop -58,
            //    sectionId =current.getAttribute('id');

              //  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                //    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            //    }else{
          //          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        //        }
      //  })
    //}
    //window.addEventListener('scroll', scrollActive);

   const handleTooltip = () => {
       setTooltip(!tooltip);
   }
    return (
        <header className="header" id="header">
        <nav className="nav container">
            <Link to="/" className="nav__logo">Yusuf</Link>
            <div className="nav__menu">
                 <ul className="nav__list">                    
                     {NavbarData.map((e) =>(
                        <NavbarList key= {e.id} id={e.id} icon={e.icon} titleRef={e.titleRef} active ={selected === e.id} setSelected={setSelected}/>
                     ))}
                    </ul>
            </div>
                {/* Theme change button */}
                <div className="nav__icon">
                    <i className="bx bx-info-circle change-theme"onClick={handleTooltip}onMouseOver={handleTooltip}></i>
                    <i className="bx bx-moon change-theme"onClick={handleTheme} id="theme-button"></i>
                   
                    <span className={tooltip ? "info__AI active" : "info__AI"}>
                    Use the Microphone button <span className="bx bx-microphone"></span> to control website.
                        You can perform task like
                        <ul className="info__AI-list">
                            <li><span className="bx bx-check"></span>Go home/ scroll to top</li>
                            <li><span className="bx bx-check"></span>contact/ use whatsapp</li>
                            <li><span className="bx bx-check"></span>conversation like AI portfolio</li>
                        </ul>
                </span>
                </div>
        </nav>
    </header>
    )
}

export default Navbar
