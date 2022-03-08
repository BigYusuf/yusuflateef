import React from 'react';


export const WorkList = ({id, title, active, setSelected}) => {
    return (
        <span className={active ? "work__item active-work" : "work__item"} onClick={() => setSelected(id)} >{title}</span>
                    
    )
}

export const NavbarList = ({id, icon, titleRef, active, setSelected}) =>{
    return (
        <li className="nav__item" key = {id}>
            <a href={titleRef} className={active ? "nav__link active-link" : "nav__link"} onClick={() => setSelected(id)}>
                <i className={icon}></i>
            </a>
        </li>
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
