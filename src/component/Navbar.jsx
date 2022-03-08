import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {NavbarList} from './ActiveList';
import {NavbarData} from '../dummyData';
import {handleTheme} from "./Utils";


const Navbar = () => {
    const [selected, setSelected] = useState("");

    
    //scroll setting for active link
    const sections = document.querySelectorAll('section[id]');
    function scrollActive(){
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight,
                sectionTop =current.offsetTop -58,
                sectionId =current.getAttribute('id');

                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
                }else{
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
                }
        })
    }
    window.addEventListener('scroll', scrollActive);

  
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
                <i className="bx bx-moon change-theme"onClick={handleTheme} id="theme-button"></i>
        </nav>
    </header>
    )
}

export default Navbar
