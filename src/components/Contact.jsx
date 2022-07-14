import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { serverTimestamp } from "firebase/firestore";
import ProjectDataService from "./project-firebase";
import {ToastContainer, toast, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({name, setName, mail, setMail, message, setMessage, loader, setLoader,
    highlighName, highlightMail, highlightMessage,  highlightWhatsapp, highlightEmail, highlightMessenger}) => {
    const form = useRef();

    const [formErrors, setFormErrors] = useState({})
       
    
    const sendEmailHandler = () => {
        setLoader(true);
        /*--------------------------mail service----------------------------*/
        emailjs.sendForm( 
            process.env.REACT_APP_SERVICE_ID, 
            process.env.REACT_APP_TEMPLATE_ID, 
            form.current, 
            process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
                toast.success("Message Sent","Thank you, Will get back to You ASAP");
                
                /*--------------------------send to firestore database----------------------------*/
                    
                const payload= {name, mail, message, createdAt: serverTimestamp()}
                ProjectDataService.addEmail(payload)
                /*--------------------------send to firestore database----------------------------*/
                setLoader(false);
            }, (error) => {
                console.log(error.text);
                toast.error("Error!!!, Message not Sent");
                setLoader(false);
            });
        setName('');
        setMail('');
        setMessage('');
        
   }
   const sendEmail = (e) => {
      e.preventDefault();
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!name){
            errors.name = "Name is required!";
            setFormErrors(errors);
        } else if(name.length < 4){
            errors.name = "Name must be more than 3 characters";
            setFormErrors(errors);
        } else if(name.length > 20){
            errors.name = "Name must not be more than 20 characters";
            setFormErrors(errors);
        }
        if(!mail){
            errors.mail = "Email is required!";
            setFormErrors(errors);
        }else if(!regex.test(mail)){
            errors.mail = "This is not a valid Email format";
            setFormErrors(errors);
        }
        if(!message){
            errors.message = "Message is required!";
            setFormErrors(errors);
        } else if(message.length < 4){
            errors.message = "Message must be more than 3 characters";
            setFormErrors(errors);
        } 
        if(name && mail && message && message.length > 3 && regex.test(mail) && name.length > 3){
            sendEmailHandler();
        };
    };
    
    return (
        <div>
            {/* ========================== contact =========================== */}
            <section className="contact section"id="contact">
                <span className="section__subtitle">Get in touch</span>
                <h2 className="section__title">Contact Me</h2>
                <div className="contact__container container grid">
                    <div className="contact__content">
                        <h3 className="contact__title">Talk to me</h3>
                        <div className="contact__info">
                            <div className={highlightEmail ? "contact__card active" : "contact__card"}>
                                    <i className="bx bx-mail-send contact__card-icon"></i>
                                    <h3 className="contact__card-title">Email</h3>
                                    <span className="contact__card-data">yusuflateef0000@gmail.com</span>
                                    <a target="_blank"  rel="noreferrer"href="mailto:yusuflateef0000@gmail.com" className="contact__button">
                                        Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                    </a>
                            </div>
                                
                            <div className={highlightWhatsapp ? "contact__card active" : "contact__card"}>
                                <i className="bx bxl-whatsapp contact__card-icon"></i>
                                <h3 className="contact__card-title">WhatsApp</h3>
                                <span className="contact__card-data">08101109290</span>
                                <a target="_blank"  rel="noreferrer"href="https://api.whatsapp.com/send?phone=+2348101109290&text=Hello, Yusuf" className="contact__button">
                                    Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                </a>
                            </div>
                            
                            <div className={highlightMessenger ? "contact__card active" : "contact__card"}>
                                <i className="bx bxl-messenger contact__card-icon"></i>
                                <h3 className="contact__card-title">Messenger</h3>
                                <span className="contact__card-data">BigYusufff</span>
                                <a target="_blank"  rel="noreferrer"href="http://m.me/Bigyusufff/" className="contact__button">
                                    Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                        
                    <div className= "contact__content">
                        <h3 className="contact__title">Write me your project</h3>
                        <form action="" className="contact__form" ref={form} onSubmit={sendEmail}>
                            <div className={formErrors.name ? "contact__form-div active" : "contact__form-div"}>
                                <label htmlFor="" className="contact__form-tag">Names</label>
                                <input
                                    type="text" name="name" value={name}
                                    onChange={(e) => setName(e.target.value)}
                                     placeholder="Insert your Name" 
                                    className={highlighName ? "contact__form-input active" : "contact__form-input"}>
                                </input>
                            </div>
                            <p className="contact__form-p">{formErrors.name}</p>

                            <div className={formErrors.mail ? "contact__form-div active" : "contact__form-div"}>
                                <label htmlFor="" className="contact__form-tag">Mail</label>
                                <input type="text"name="email" value={mail}
                                    onChange={(e) => setMail(e.target.value)}
                                     placeholder="Insert your Email"
                                    className={highlightMail ? "contact__form-input active" : "contact__form-input"}>
                                </input>
                            </div>
                            <p className="contact__form-p">{formErrors.mail}</p>
                            
                            <div className={formErrors.message ? "contact__form-area active" : "contact__form-area"}>
                                <label htmlFor="" className="contact__form-tag">Project</label>
                                <textarea rows="10" name="message"  value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    id="" col="30" placeholder="Write your project" 
                                    type="text" className={highlightMessage ? "contact__form-input active" : "contact__form-input"}>
                                </textarea>
                            </div>
                            <p className="contact__form-p">{formErrors.message}</p>
                            <div className="contact__form-buttonSection">

                                <button className={loader ? "contact__Send-button button active" : "contact__Send-button button"}>Send</button>
                                <div className="contact__form-notification">
                                    <h4 className="contact__form-noti-header">Message Sent</h4>
                                    <span className="contact__form-noti-body">Thank you, Will get back to You ASAP</span>
                                </div>
                            </div>
                            <ToastContainer draggable={false} transition={Zoom} autoClose={3000}/>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Contact
