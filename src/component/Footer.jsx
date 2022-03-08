import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div>
            {/* ========================== Footer =========================== */}
            <footer className="footer" id="footer">
                
                <div className="footer__container container grid">
                    <h1 className="footer__title">Yusuf</h1>
                    <ul className="footer__list">
                        <li>
                            <Link to="about" className="footer__link">About</Link>
                        </li>
                        <li>
                            <Link to="work" className="footer__link">Projects</Link>
                        </li>
                        <li>
                            <Link to="testimonial" className="footer__link">Testimonial</Link>
                        </li>
                    </ul>
                    <ul className="footer__social">
                        <Link to="https://www.facebook.com/" target="_blank"className="footer__social-link">
                            <i className="bx bxl-facebook"></i>
                        </Link>
                        <Link to="https://www.instagram.com/" target="_blank"className="footer__social-link">
                            <i className="bx bxl-instagram"></i>
                        </Link>
                        <Link to="https://www.twitter.com/" target="_blank"className="footer__social-link">
                            <i className="bx bxl-twitter"></i>
                        </Link>
                    </ul>
                    <span className="footer__copy">
                        &#169; BigYusufff. All rights reserved
                    </span>
                </div>
            </footer>



        </div>
    )
}

export default Footer
