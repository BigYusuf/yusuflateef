import React, { useRef, useState } from 'react';
import {Link} from "react-router-dom";
import Toast from './toast/Toast';
import emailjs from '@emailjs/browser';

const Contact = ({name, setName,mail, setMail,message, setMessage, highlighName, highlightMail, highlightMessage,  highlightWhatsapp, highlightEmail, highlightMessenger}) => {
    const [list, setList] = useState([]);
    let toastProperties = null;
  
    const showToast = type => {
      switch(type) {
        case 'success':
          toastProperties = {
            id: list.length+1,
            title: 'Message Sent',
            description: 'Will get back to You ASAP',
            backgroundColor: '#5cb85c'
          }
          break;
        case 'danger':
          toastProperties = {
            id: list.length+1,
            title: 'Danger',
            description: 'Error',
            backgroundColor: '#d9534f'
          }
          break;
        default:
          toastProperties = [];
      }
      setList([...list, toastProperties]);
    };
    const form = useRef();
    
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_73k6c0a', 'template_0n0ym3t', form.current, 'user_TxNwOLu80dLefT1wHFxyt')
      //emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        .then((result) => {
            console.log(result.text);
            showToast('success');
         }, (error) => {
            console.log(error.text);
            showToast('danger');
        });
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
                                    <span className="contact__card-data">mystik5551@gmail.com</span>
                                    <a href="mailto:mystik5551@gmail.com" className="contact__button">
                                        Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                    </a>
                            </div>
                                
                            <div className={highlightWhatsapp ? "contact__card active" : "contact__card"}>
                                <i className="bx bxl-whatsapp contact__card-icon"></i>
                                <h3 className="contact__card-title">WhatsApp</h3>
                                <span className="contact__card-data">08101109290</span>
                                <a href="https://api.whatsapp.com/send?phone=08101109290&text=Hello, more information!" className="contact__button">
                                    Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                </a>
                            </div>
                            
                            <div className={highlightMessenger ? "contact__card active" : "contact__card"}>
                                <i className="bx bxl-messenger contact__card-icon"></i>
                                <h3 className="contact__card-title">Messenger</h3>
                                <span className="contact__card-data">BigYusufff</span>
                                <Link to="#" target="_blank" className="contact__button">
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
                            <button className="button">Send Message</button>
                            <Toast toastlist={list} position="bottom-left" setList={setList} />
                        </form>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Contact
