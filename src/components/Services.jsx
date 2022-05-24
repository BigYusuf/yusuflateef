
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
                        <h3 className="services__title">  Web Designer</h3>
                        <p className="services__modal-description">
                            Service with more than 3 years of experience.
                            Providing quality work to clients and companies
                        </p>
                        <ul className="services__modal-list">
                            <li className="services__modal-item">
                                <i className="bx bx-check services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Develop the user interface
                                </p>
                            </li>
                            <li className="services__modal-item">
                                <i className="bx bx-check services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Work hand in hand with client
                                </p>
                            </li>
                            <li className="services__modal-item">
                                <i className="bx bx-check services__modal-icon"></i>
                                <p className="services__modal-info">
                                 Complete transparency and product support
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className={highlightservices2 ? "services__card active" : "services__card"}>              
                        <h3 className="services__title">  API Manager</h3>
                        <p className="services__modal-description">
                            Service with more than 3 years of experience.
                            Providing quality work to clients and companies
                        </p>
                        <ul className="services__modal-list">
                            <li className="services__modal-item">
                                <i className="bx bx-check services__modal-icon"></i>
                                <p className="services__modal-info">
                                    We create and manage API's
                                </p>
                            </li>
                            <li className="services__modal-item">
                                <i className="bx bx-check services__modal-icon"></i>
                                <p className="services__modal-info">
                                    We design Npm packages
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className={highlightservices3 ? "services__card active" : "services__card"}>              
                        <h3 className="services__title">  GIS Developer</h3>
                        <p className="services__modal-description">
                            Provide GIS related services as a consultant and as a freelancer
                        </p>
                        <ul className="services__modal-list">
                            <li className="services__modal-item">
                                <i className="bx bx-check services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Create and manage Geo- database
                                </p>
                            </li>
                            <li className="services__modal-item">
                                <i className="bx bx-check services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Create Data models to automate GIS processes
                                </p>
                            </li>
                            <li className="services__modal-item">
                                <i className="bx bx-check services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Present GIS data or result as a website or application
                                </p>
                            </li>
                            <li className="services__modal-item">
                                <i className="bx bx-check services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Convert data(shp, geojson) to API with database
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
