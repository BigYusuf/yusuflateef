import React, { useRef } from 'react';
import {Link} from "react-router-dom";
import emailjs from '@emailjs/browser';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase';
import {ToastContainer, toast, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({name, setName,mail, setMail, message, setMessage, loader, setLoader,
    highlighName, highlightMail, highlightMessage,  highlightWhatsapp, highlightEmail, highlightMessenger}) => {
    const form = useRef();
    
    const sendEmail = (e) => {
      e.preventDefault();
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
            addDoc(collection(db, "portfolio"), {
                name:name,
                mail:mail,
                message:message
            });
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
                                    <a href="mailto:yusuflateef0000@gmail.com" className="contact__button">
                                        Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                    </a>
                            </div>
                                
                            <div className={highlightWhatsapp ? "contact__card active" : "contact__card"}>
                                <i className="bx bxl-whatsapp contact__card-icon"></i>
                                <h3 className="contact__card-title">WhatsApp</h3>
                                <span className="contact__card-data">08101109290</span>
                                <a href="https://api.whatsapp.com/send?phone=+2348101109290&text=Hello, more information!" className="contact__button">
                                    Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                </a>
                            </div>
                            
                            <div className={highlightMessenger ? "contact__card active" : "contact__card"}>
                                <i className="bx bxl-messenger contact__card-icon"></i>
                                <h3 className="contact__card-title">Messenger</h3>
                                <span className="contact__card-data">BigYusufff</span>
                                <Link to="http://m.me/Bigyusufff/" target="_blank" className="contact__button">
                                    Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                        
                    <div className= "contact__content">
                        <h3 className="contact__title">Write me your project</h3>
                        <form action="" className="contact__form" ref={form} onSubmit={sendEmail}>
                            <div className="contact__form-div">
                                <label htmlFor="" className="contact__form-tag">Names</label>
                                <input
                                    type="text" name="name" value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required placeholder="Insert your Name" 
                                    className={highlighName ? "contact__form-input active" : "contact__form-input"}>

                                    </input>
                            </div>
                            <div className= "contact__form-div">
                                <label htmlFor="" className="contact__form-tag">Mail</label>
                                <input type="email"name="email" value={mail}
                                    onChange={(e) => setMail(e.target.value)}
                                    required placeholder="Insert your Email"
                                    className={highlightMail ? "contact__form-input active" : "contact__form-input"}>

                                    </input>
                            </div>
                            
                            <div className="contact__form-div contact__form-area">
                                <label htmlFor="" className="contact__form-tag">Project</label>
                                <textarea rows="10"required name="message"  value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    id="" col="30" placeholder="Write your project" 
                                    type="text" className={highlightMessage ? "contact__form-input active" : "contact__form-input"}>

                                    </textarea>
                            </div>
                            <div className="contact__form-buttonSection">

                                <button className={loader ? "contact__Send-button button active" : "contact__Send-button button"}>Send Message</button>
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
