import React, { useRef, useState } from 'react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase';
import {ToastContainer, toast, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Projects = () => {
    const [title, setTitle] = useState("");
    const [frontend, setFrontend] = useState("");
    const [backend, setBackend] = useState("");
    const [others, setOthers] = useState("");
    const [description, setDescription] = useState("");
    const [linkGithub, setLinkGithub] = useState("");
    const [linkDemo, setLinkDemo] = useState("");
    const [linkBlog, setLinkBlog] = useState("");
    const [cat, setCat] = useState("");
    const [loader, setLoader] = useState(false);
    const [projectpage, setProjectpage] = useState(true);
    const form = useRef();
    
    const sendData = (e) => {
    e.preventDefault();
    setLoader(true);
    console.log(cat)
    if(!cat){
        console.log('category is empty')
    }else{
       
      /*--------------------------send to firestore database----------------------------*/
      addDoc(collection(db, cat), {
        title:title,
        frontend:frontend,
        cat:cat,
        backend:backend,
        others:others,
        description:description,
        linkBlog:linkBlog,
        linkDemo:linkDemo,
        linkGithub:linkGithub,
        createdAt:serverTimestamp()
    }).then(() => {
            toast.success("Project Added successfully");
            setLoader(false);
        }, (error) => {
            console.log(error.text);
            toast.error("Error!!!, Project not Added");
            setLoader(false);
        });
    setTitle('');
    setFrontend('');
    setBackend('');
    setOthers('');
    setDescription('');
    setLinkGithub('');
    setLinkBlog('');
    setLinkDemo('');
    setCat('');
    };
 };
    
    return (
        <div>
            {/* ========================== contact =========================== */}
            <section className="contact section"id="contact">
                <span className="section__subtitle">Project Matters</span>
                <h2 className="section__title">Project Manager</h2>
                <div className="contact__container container grid">
                    <div className="contact__content">
                        <h3 className="contact__title">Project list</h3>
                        <div className="contact__info">
                            <div className="contact__card">
                                <i className="bx bx-data contact__card-icon"></i>
                                <h3 className="contact__card-title">Project Database</h3>
                                <div className="contact__form-div1">
                                    <select name="cat" value={cat} id="cat"onChange={(e) => setCat(e.target.value)} className="contact__select">
                                        <option className="contact__option" defaultValue value="">Select Category</option>
                                        <option className="contact__option" value="web">Web Application</option>
                                        <option className="contact__option" value="api">API/ Backend</option>
                                        <option className="contact__option" value="gis">GIS Related</option>
                                    </select>
                                </div>
                            </div>
                            <div className="contact__card table">
                                    This is a table
                            </div>
                        </div>
                    </div>
                        
                    <div className= "contact__content">
                        <h3 className="contact__title">Add new project</h3>
                        <form action="" className="contact__form" ref={form} onSubmit={sendData}>
                           {projectpage ? (
                               
                           <div className="contact__section1">
                                <div className="contact__form-div">
                                    <label htmlFor="" className="contact__form-tag">Project Title</label>
                                    <input
                                        type="text" name="name" value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required placeholder="Insert Project title" 
                                        className="contact__form-input">

                                        </input>
                                </div>
                                <div className= "contact__form-div">
                                    <label htmlFor="" className="contact__form-tag">Frontend stacks</label>
                                    <input type="text"name="frontend" value={frontend}
                                        onChange={(e) => setFrontend(e.target.value)}
                                        required placeholder="Insert your Frontend technologies used "
                                        className="contact__form-input">
                                    </input>
                                </div>
                                <div className= "contact__form-div">
                                    <label htmlFor="" className="contact__form-tag">Backend stacks</label>
                                    <input type="text"name="backend" value={backend}
                                        onChange={(e) => setBackend(e.target.value)}
                                        required placeholder="Insert your Backend technologies used "
                                        className="contact__form-input">
                                    </input>
                                </div>
                                <div className= "contact__form-div">
                                    <label htmlFor="" className="contact__form-tag">Other stacks</label>
                                    <input type="text"name="others" value={others}
                                        onChange={(e) => setOthers(e.target.value)}
                                        required placeholder="Insert any other technologies used "
                                        className="contact__form-input">
                                    </input>
                                </div>
                                <div className="contact__form-div contact__form-area">
                                    <label htmlFor="" className="contact__form-tag">Project Description</label>
                                    <textarea rows="10"required name="description"  value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        id="" col="30" placeholder="Tell us about the project" 
                                        type="text" className= "contact__form-input">

                                        </textarea>
                                </div>
                                <button className="button contact__Send-button" onClick={()=> setProjectpage(false)}>Next</button>
                            </div>
                           ) : (
                            <>
                            <div className="contact__section2">
                                <div className="contact__form-div">
                                    <label htmlFor="" className="contact__form-tag">Github Link</label>
                                    <input type="text" name="linkGithub" value={linkGithub}
                                        onChange={(e) => setLinkGithub(e.target.value)}
                                        required placeholder="Insert Github repo Link"
                                        className="contact__form-input">
                                    </input>
                                </div>
                                <div className="contact__form-div">
                                    <label htmlFor="" className="contact__form-tag">Demo Link</label>
                                    <input type="text" name="linkDemo" value={linkDemo}
                                        onChange={(e) => setLinkDemo(e.target.value)}
                                        required placeholder="Insert web application Link"
                                        className="contact__form-input">
                                    </input>
                                </div>
                                <div className= "contact__form-div">
                                    <label htmlFor="" className="contact__form-tag">Driect Blog Link</label>
                                    <input type="text"name="linkBlog" value={linkBlog}
                                        onChange={(e) => setLinkBlog(e.target.value)}
                                        required placeholder="Insert your blog or any useful link"
                                        className="contact__form-input">
                                    </input>
                                </div>
                            
                            </div>
                            <div className="contact__form-buttonSection">
                               <button className="button contact__Send-button" onClick={()=> setProjectpage(true)}>Back</button>
                                <button className={loader ? "contact__Send-button button active" : "contact__Send-button button"}>Add Project</button>
                            </div>
                            </>
                           )}
                            <ToastContainer draggable={false} transition={Zoom} autoClose={3000}/>
                        
                        
                        </form>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Projects
