
import React from 'react';
const Services = ({highlightservices1, highlightservices2, highlightservices3}) => {
    return (
        <div>
            {/* ========================== services=========================== */}
        <section className="services section"id="services">
        <span className="section__subtitle">My Services</span>
        <h2 className="section__title">What I Offer</h2>
        
        <div className="services__container container grid">
            <div className={highlightservices1 ? "services__card active" : "services__card"}>              
                <h3 className="services__title">Product Designer</h3>
                <p className="services__modal-description">
                    Service with more than 3 years of experience.
                    Providing quality work to clients and companies
                </p>
                <ul className="services__modal-list">
                    <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                            I develop the user interface
                        </p>
                    </li>
                    <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                            I develop the user interface
                        </p>
                    </li>
                    <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                            Design and mockups of products for companies
                        </p>
                    </li>
                </ul>
            </div>
            <div className={highlightservices2 ? "services__card active" : "services__card"}>              
                <h3 className="services__title">Product Designer</h3>
                <p className="services__modal-description">
                    Service with more than 3 years of experience.
                    Providing quality work to clients and companies
                </p>
                <ul className="services__modal-list">
                    <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                            I develop the user interface
                        </p>
                    </li>
                    <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                            I develop the user interface
                        </p>
                    </li>
                    <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                            Design and mockups of products for companies
                        </p>
                    </li>
                </ul>
            </div>
            <div className={highlightservices3 ? "services__card active" : "services__card"}>              
                <h3 className="services__title">API Designer</h3>
                <p className="services__modal-description">
                    Service with more than 3 years of experience.
                    Providing quality work to clients and companies
                </p>
                <ul className="services__modal-list">
                    <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                            I develop the user interface
                        </p>
                    </li>
                    <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                            I develop the user interface
                        </p>
                    </li>
                    <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info">
                            Design and mockups of products for companies
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    
        </div>
    )
}

export default Services
