import React, { useState, useEffect  } from 'react';
import Intro  from "./Intro";
import About  from "./About";
import Skills  from "./Skills";
import ServicesCopy  from "./ServicesCopy";
import Work  from "./Work";
import Contact from './Contact';
import Testimonials  from "./Testimonials";
import {handleTheme} from './Utils';
import alanBtn from "@alan-ai/alan-sdk-web";

const Alan = () => {
  //  const [change, setChange] = useState("");
  
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");
    const [alanInstance, setAlanInstance] = useState();
    const [highlighName, setHighlightName] = useState(false);
    const [highlightMail, setHighlightMail] = useState(false);
    const [highlightMessage, setHighlightMessage] = useState(false);
    const [highlightWhatsapp, setHighlightWhatsapp] = useState(false);
    const [highlightMessenger, setHighlightMessenger] = useState(false);
    const [highlightEmail, setHighlightEmail] = useState(false);
    const [highlightdesc, setHighlightdesc] = useState(false);
    const [highlightexp, setHighlightexp] = useState(false);
    const [highlightwork, setHighlightwork] = useState(false);
    const [highlightsupport, setHighlightsupport] = useState(false);
    const [highlightskills1, setHighlightskills1] = useState(false);
    const [highlightskills2, setHighlightskills2] = useState(false);
    const [highlightservices1, setHighlightservices1] = useState(false);
    const [highlightservices2, setHighlightservices2] = useState(false);
    const [highlightservices3, setHighlightservices3] = useState(false);

    const aboutMe = () => {  
        window.location.href = 'http://localhost:3000/#about';
    }
    const home = () => { 
        window.location.href = 'http://localhost:3000/#home';
    }
    const contact = () => { 
        window.location.href = 'http://localhost:3000/#contact';
    }
    const projects = () => { 
        window.location.href = 'http://localhost:3000/#work';
    }
    const skills = () => {
        window.location.href = 'http://localhost:3000/#skills';
    }
    const services = () => {
        window.location.href = 'http://localhost:3000/#services';
    }
    const testi = () =>  {
        window.location.href = 'http://localhost:3000/#Testimonial';
    }
    
    useEffect(() => {
      if(alanInstance != null) return
      setAlanInstance(
            alanBtn({
              bottom: '20px',
              left: '20px',
              //
            key: process.env.REACT_APP_ALAN_KEY,
            onCommand: (commandData) => {
              if (commandData.command === 'change-theme' ) { handleTheme(); }
              else if (commandData.command === 'about-me' ) { aboutMe();   }
              else if (commandData.command === 'home' ) {home();  }
              else if (commandData.command === 'contact' ) { contact(); }
              else if (commandData.command === 'skills' ) {  skills(); }
              else if (commandData.command === 'work' ) {projects();
                 console.log(commandData)}
               if (commandData.command === 'whats-app' ) { 
                window.location.href = "https://api.whatsapp.com/send?phone=08101109290&text=Hello, more information!";
              }
               if (commandData.command === 'highlight-WhatsApp' ) { 
                setHighlightEmail(false);
                setHighlightWhatsapp(!highlightWhatsapp);
                }
               if (commandData.command === 'highlight-email' ) { 
                setHighlightEmail(!highlightEmail);
                }
               if (commandData.command === 'highlight-fb-ms' ) { 
                setHighlightWhatsapp(false);
                setHighlightMessenger(!highlightMessenger);
                }
               if (commandData.command === 'highlight-form' ) { 
                setHighlightMessenger(false);
                }
              
               if (commandData.command === 'highlight-about1' ) { 
                setHighlightdesc(!highlightdesc);
                }
               if (commandData.command === 'highlight-about2' ) { 
                setHighlightdesc(false);
                setHighlightexp(!highlightexp);
                }
               if (commandData.command === 'highlight-about3' ) { 
                setHighlightexp(false);
                setHighlightwork(!highlightwork);
                }
               if (commandData.command === 'highlight-about4' ) { 
                setHighlightwork(false);
                setHighlightsupport(!highlightsupport);
                }
               if (commandData.command === 'highlight-skills1' ) { 
                skills();
                setHighlightsupport(false);
                setHighlightskills1(!highlightskills1);
                }
               if (commandData.command === 'highlight-skills2') { 
                setHighlightskills1(false);
                setHighlightskills2(!highlightskills2);
                }
               if (commandData.command === 'highlight-services1' ) { 
                 services();
                setHighlightskills2(false);
                setHighlightservices1(!highlightservices1);
                }
               if (commandData.command === 'highlight-services2' ) { 
                setHighlightservices1(false);
                setHighlightservices2(!highlightservices2);
                }
               if (commandData.command === 'highlight-services3') { 
                setHighlightservices2(false);
                setHighlightservices3(!highlightservices3);
                }
               if (commandData.command === 'testimonial' ) {testi()}
               if (commandData.command === 'input-name' ) {
                 setName(commandData.value.value);
                }
                if (commandData.command === 'highlight-name' ) {
                  setHighlightName(!highlighName);
                }
                if (commandData.command === 'input-mail' ) {
                  setMail(commandData.value.value);
                 }
                if (commandData.command === 'highlight-mail' ) {
                  setHighlightMail(!highlightMail);
                }
                if (commandData.command === 'input-msg' ) {
                 // setMessage(commandData.value.value);
                  console.log(commandData)
                 }
                if (commandData.command === 'highlight-msg' ) {
                  setHighlightName(false);
                  setHighlightMessage(!highlightMail);
                }
                if (commandData.command === 'highlight-clear-contact' ) { 
                  setHighlightMessage(false);
                  }
            }
        })
      )
      }, [alanInstance, highlightservices1, highlightservices2, 
        highlightservices3, highlightskills1, highlightskills2,
        highlighName, highlightMail, highlightMessage,
        highlightWhatsapp, highlightEmail, highlightMessenger, 
        highlightdesc, highlightsupport, highlightexp, highlightwork]);

    return (
        <div>
            <Intro/>
            <About highlightdesc={highlightdesc}
                   highlightexp={highlightexp}
                   highlightwork={highlightwork}
                   highlightsupport={highlightsupport}
            />
            <Skills highlightskills1={highlightskills1}
                    highlightskills2={highlightskills2}
            />
            <ServicesCopy highlightservices1={highlightservices1}
                          highlightservices2={highlightservices2}
                          highlightservices3={highlightservices3}
            />
            <Work/>
            <Testimonials/>
            <Contact name={name}
                     setName={setName}
                     mail={mail}
                     setMail={setMail}
                     message={message}
                     setMessage={setMessage}
                     highlighName={highlighName}
                     highlightMail={highlightMail}
                     highlightMessage={highlightMessage}
                     highlightWhatsapp={highlightWhatsapp}
                     highlightEmail={highlightEmail}
                     highlightMessenger={highlightMessenger}
                     
            />
        </div>
    )
}

export default Alan