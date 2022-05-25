import React, { useRef, useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {handleUpload, handleUpload1} from '../components/Utils';
import Navbar from "../components/Navbar";
import { webData, APIData, gisData } from '../data'
import { db } from '../firebase';
import {ToastContainer, toast, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Projects = () => {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState("");
    const [frontend, setFrontend] = useState("");
    const [backend, setBackend] = useState("");
    const [others, setOthers] = useState("");
    const [description, setDescription] = useState("");
    const [linkGithub, setLinkGithub] = useState("");
    const [linkDemo, setLinkDemo] = useState("");
    const [linkBlog, setLinkBlog] = useState("");
    const [cat, setCat] = useState("");
    const [tablecat, setTablecat] = useState("");
    const [image, setImage] = useState(null);
    const [image1, setImage1] = useState([]);
    const [img, setImg] = useState("");
    const [img1, setImg1] = useState([]);
    const [loader, setLoader] = useState(false);
    const [projectpage, setProjectpage] = useState(true);
    const form = useRef();

    const handleChange = (e) => {
        if (e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }
    const handleChange1 = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setImage1((prevState) => [...prevState, newImage]);
            console.log("images: ",image1)
            console.log("urls: ",img1)
          }
    }
    
    const sendData = (e) => {
    e.preventDefault();
    setLoader(true);
    if(!cat){
        console.log('category is empty')
    }else{
        //
          handleUpload({url:img,setUrl:setImg, image:image});
          handleUpload1({url:img1,setUrl:setImg1, images:image1});
          console.log("urls: ",img1)
        //
      /*--------------------------send to firestore database----------------------------*/
      addDoc(collection(db, cat), {
        title:title,
        frontend:frontend,
        cat:cat,
        img:img,
        img1:img1,
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
    
    useEffect(() => {
        switch (tablecat) {
            case 'web':
                setData(webData)
                break;
            case 'api':
                setData(APIData)
                break;
            case 'gis':
                setData(gisData)
                break;
            default:
                setData([])
                break;
        }
    }, [tablecat, setData])
        /*console.log("table category",tablecat);
        console.log("data",data);*/
    
    return (
        <div>
            <Navbar/>
            {/* ========================== project manager =========================== */}
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
                                    <select name="cat" value={tablecat} id="cat"onChange={(e) => setTablecat(e.target.value)} className="contact__select">
                                        <option className="contact__option" defaultValue value="">Select Category</option>
                                        <option className="contact__option" value="web">Web Application</option>
                                        <option className="contact__option" value="api">API/ Backend</option>
                                        <option className="contact__option" value="gis">GIS Related</option>
                                        
                                    </select>
                                </div>
                            </div>
                        <div className="contact__card">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>TITLE</th>
                                        <th>ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, i)=>(
                                        <tr className=""key={i}>
                                            <td>{i+1}</td>
                                            <td>{item.title}</td>
                                            <td>
                                              { /* <i type="" className="bx bx-pen" onClick={() => props.history.push(`/project/${project._id}/edit`)}></i>
                                                <i type="" className="bx bx-trash" onClick={() => deleteHandler()}></i>*/}
                                              <i type="" className="bx bx-pen"></i>
                                                <i type="" className="bx bx-trash"></i>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        
                            </div>
                        </div>
                    </div>
                        
                    <div className= "contact__content">
                        <h3 className="contact__title">Add new project</h3>
                        <form action="" className="contact__form" ref={form} onSubmit={sendData}>
                           {projectpage ? (
                               
                           <div className="contact__section1">
                                <div className="contact__form-img"> 
                                <label htmlFor="" className="contact__form-tag">Project Image</label>
                                    {image ? (
                                    <img style={{width:200, height:150}}id="image" 
                                    alt="" src={URL.createObjectURL(image)} 
                                    />) : (
                                        <img style={{width:200, height:150, }}id="image"
                                        alt="" src="/image/default-img.png" 
                                        />)}
                                    <input type="file" id="imagefile"accept="image/*" style={{display:"none"}}
                                        onChange={handleChange} />
                                        <label htmlFor="imagefile" onChange={handleChange}className="upload-icon">
                                        <i className="bx bx-upload"></i>
                                        </label>
                                </div>
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
                                    <select name="cat" value={cat} id="cat"onChange={(e) => setCat(e.target.value)} className="contact__select1">
                                        <option className="contact__option" defaultValue value="">Select Category</option>
                                        <option className="contact__option" value="web">Web Application</option>
                                        <option className="contact__option" value="api">API/ Backend</option>
                                        <option className="contact__option" value="gis">GIS Related</option>
                                    </select>
                                </div>
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
                                <div className="contact__form-img"> 
                                <label htmlFor="" className="contact__form-tag">Extra Image</label>
                                    <div> 
                                        
                                    <input type="file" id="imagefile1" multiple accept="image/*"
                                                onChange={handleChange1} />
                                        {image1 ? (

                                            <div className="contact__form-imgwrapper">
                                                {img1.map((imgb, i) =>
                                                (
                                                    <img key={i} style={{width:160, height:150}}id="image1" 
                                                        alt="imageh" src={imgb}
                                                    />
                                                ))}
                                            </div>
                                        ): (
                                            <div>
                                                <img style={{width:160, height:150, }}id="image1"
                                                alt="" src="/image/default-img.png" 
                                                />
                                            </div>
                                            )}
                                    </div>
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
