import React from 'react';

const Footer = () => {
    return (
        <div>
            {/* ========================== Footer =========================== */}
            <footer className="footer" id="footer">
                
                <div className="footer__container container grid">
                    <h1 className="footer__title"><span className="nav__logo1">Big</span>Yusuff</h1>
                    <ul className="footer__list">
                        <li>
                            <a href="#about" className="footer__link">About</a>
                        </li>
                        <li>
                            <a href="#work" className="footer__link">Projects</a>
                        </li>
                        <li>
                            <a href="#testimonial" className="footer__link">Testimonial</a>
                        </li>
                    </ul>
                    <ul className="footer__social">
                        <a href="https://www.facebook.com/bigyusufff" className="footer__social-link">
                            <i className="bx bxl-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/bigyusufff" className="footer__social-link">
                            <i className="bx bxl-instagram"></i>
                        </a>
                        <a href="https://www.twitter.com/" className="footer__social-link">
                            <i className="bx bxl-twitter"></i>
                        </a>
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
