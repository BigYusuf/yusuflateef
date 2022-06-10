import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from "../context/UserAuthContext";

const LoginComponent = ({password, setPassword, mail, setMail}) => {
    const form = useRef();
    const [error, setError] = useState("");
    const { logIn, logOut, RealUser } = useUserAuth();
    const navigate = useNavigate();

    const [formErrors, setFormErrors] = useState({})

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
    
        
   const handleLogin = async (e) => {
      e.preventDefault();
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!password){
            errors.password = "Password is required!";
            setFormErrors(errors);
        } else if(password.length < 4){
            errors.password = "Password must be more than 3 characters";
            setFormErrors(errors);
        } else if(password.length > 20){
            errors.password = "Password must not be more than 20 characters";
            setFormErrors(errors);
        }
        if(!mail){
            errors.mail = "Email is required!";
            setFormErrors(errors);
        }else if(!regex.test(mail)){
            errors.mail = "This is not a valid Email format";
            setFormErrors(errors);
        }
        if(password && mail && regex.test(mail) && password.length > 3){
            try {
                await logIn(mail, password);
                navigate("/projects");
            } catch (err) {
                setError(err.message);
            }
        };
        
        console.log(errors);
    };
    const demoLogin = (e) => {
        e.preventDefault();
        setMail(process.env.REACT_APP_GUEST_EMAIL);
        setPassword(process.env.REACT_APP_GUEST_PASSWORD);
    }
    
    return (
        <div>
            {/* ========================== Login =========================== */}
            <section className="contact section"id="contact">
                <span className="section__subtitle">Welcome Boss</span>
                <h2 className="section__title">Real Admin Sign In</h2>
                <div className="contact__container container grid">
                    <div className="contact__content">
                        <h3 className="contact__title">Full Access to: </h3>
                        <div className="contact__info">
                            <div className= "contact__card">
                                <i className="bx bx-book contact__card-icon"></i>
                                <h3 className="contact__card-title">Project Manager</h3>
                                <span className="contact__card-data">Add, Edit and Delete project from Database</span>
                                <Link to="/projects" className="contact__button">
                                    Let's go <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                </Link>
                            </div>
                                
                            <div className={"contact__card"}>
                                <i className="bx bx-data contact__card-icon"></i>
                                <h3 className="contact__card-title">Testimonial Manager</h3>
                                <span className="contact__card-data">Enable/ Disable any testimonial from Database</span>
                                <Link to="/testimonials" className="contact__button">
                                    Let's go <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                </Link>
                            </div>
                            
                            <div className={"contact__card"}>
                                <i className="bx bx-user contact__card-icon"></i>
                                <h3 className="contact__card-title">Full Control of portfolio</h3>
                                <span className="contact__card-data">Grant access to the following sections: about me, services list, skills section, footer ands home section</span>
                                <Link to="" className="contact__button">
                                    Let's go <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                        
                    <div className= "contact__content">
                        {!RealUser ? (
                            <>
                                <h3 className="contact__title">Sign In</h3>
                                <form action="" className="contact__form" ref={form} onSubmit={handleLogin}>
                                    
                                    <div className={formErrors.mail ? "contact__form-div active" : "contact__form-div"}>
                                        <label htmlFor="" className="contact__form-tag">Email</label>
                                        <input type="text"name="email" value={mail}
                                            onChange={(e) => setMail(e.target.value)}
                                            placeholder="Insert your Email"
                                            className={"contact__form-input"}>
                                        </input>
                                    </div>
                                    <p className="contact__form-p">{formErrors.mail}</p>

                                    <div className={formErrors.password ? "contact__form-div active" : "contact__form-div"}>
                                        <label htmlFor="" className="contact__form-tag">Password</label>
                                        <input
                                            type="password" name="password" value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Insert password" 
                                            className={"contact__form-input"}>
                                        </input>
                                    </div>
                                    <p className="contact__form-p">{formErrors.password}</p>
                                    
                                    <div className="contact__form-buttonSection">

                                        <button className="contact__Send-button button">Sign in</button>
                                        
                                    </div>
                                    {error && ( <p className="contact__form-p">{error}</p> )}

                                </form>
                                <div className= "contact__card demo_login">
                                    <h3 className="contact__card-title">Demo App</h3>
                                    <span className="contact__card-data">If you wish to demo this app with admin access</span>
                                    <span className="contact__card-data">Enter the following details</span>
                                    
                                    <ul className="contact__card-data">
                                    <li className="contact__card-list">Email: guest@bigyusufff.com</li>
                                    <li className="contact__card-list">Password: guest123</li>
                                    </ul>
                                    <hr/>
                                    <span className="contact__card-data">OR</span>
                                    <span className="contact__card-data">Just Click this</span>
                                    <Link to="#" className="contact__button" onClick={demoLogin}>
                                        Demo Login <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                    </Link>
                                </div>
                            </>
                        ):(
                            <>
                                <h3 className="contact__title">Sign Out</h3>
                                <form action="" className="contact__form" ref={form} onSubmit={handleLogin}>
                                <div className= "contact__card">
                                    <img src="/image/pic-4.png" alt="" className="testimonial__img"/>
                                    <h3 className="contact__card-title">Demo App</h3>
                                    
                                    <ul className="contact__card-data">
                                    <li className="contact__card-list">Email: guest@bigyusufff.com</li>
                                    <br/>
                                    <li className="contact__card-list">This is a guest administrative account which grants access to some admin 
                                    privileges.</li>
                                    </ul>
                                    <Link to="#" className="contact__button" onClick={handleLogout}>
                                        Log Out <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                    </Link>
                                </div>
                                </form>
                            </>
                        )}

                    </div>

                </div>
            </section>
        </div>
    )
}

export default LoginComponent
