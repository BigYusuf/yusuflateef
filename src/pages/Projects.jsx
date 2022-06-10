import React, { useRef, useState, useEffect } from 'react';
import { serverTimestamp } from "firebase/firestore";
import { handleUpload1, handleUploadImg} from '../components/Utils';
import ProjectDataService from "../components/project-firebase";
import {ToastContainer, toast, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUserAuth } from '../context/UserAuthContext';
import Navbar from '../components/Navbar';

const Projects = () => {
    const [dataId, setDataId] = useState("");
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
    const [works, setWorks] = useState([]);
    const [loader, setLoader] = useState(false);
    const [projectpage, setProjectpage] = useState(true);
    const form = useRef();
    const {RealUser} = useUserAuth();
    const [navbarChange, setNavbarChange] = useState(true);
    
  const ListProjects = async () => {
    const data = await ProjectDataService.getAllProjects();
    setWorks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }
  

    useEffect(() => {
        const ListProjectsBycategory = async () => {
            const data = await ProjectDataService.getProjectsByCategory(tablecat);
            setWorks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          }
        if(tablecat){
            ListProjectsBycategory();
        }else{
            ListProjects();
        }
   }, [tablecat])
   
   useEffect(() => {
       
    const editProject = async () => {
        try {
        const docSnap = await ProjectDataService.getProject(dataId);
        console.log("the record is :", docSnap.data());
        setTitle(docSnap.data().title);
        setFrontend(docSnap.data().frontend);
        setBackend(docSnap.data().backend);
        setImg(docSnap.data().img);
        setOthers(docSnap.data().others);
        setDescription(docSnap.data().description);
        setLinkGithub(docSnap.data().linkGithub);
        setLinkBlog(docSnap.data().linkBlog);
        setLinkDemo(docSnap.data().linkDemo);
        setCat(docSnap.data().cat);
        } catch (error) {}
    };
    if (dataId !== undefined && dataId !== "") {
        editProject();
      }
   }, [dataId])

    const handleChange1 = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setImage1((prevState) => [...prevState, newImage]);
          }
    }
    
    
    const unAuthenticated = (e) => {
        e.preventDefault();
        toast.error("Error!!!, You are not authenticated");
    } 
    useEffect(() => {
      if(image){
        handleUploadImg({url:img, setImg, image})
      }
  }, [image,img])
    
    const addData = (e) => {
        e.preventDefault();
        setLoader(true);
        
        handleUpload1({img1:img1,setUrl:setImg1, images:image1});
    const payload= {title, frontend, cat, img:img, img1: img1, backend, others, description, linkBlog, linkDemo, linkGithub, createdAt: serverTimestamp()}
    if (dataId !== undefined && dataId !== "") {
        
        ProjectDataService.updateProject(dataId, payload).then(() => {
            toast.success("Project Updated successfully");
            setLoader(false);
            ListProjects();
            console.log('Updated Project ',payload);
        }, (error) => {
            console.log(error.text);
            toast.error("Error!!!, Project not Updated");
            setLoader(false);
        });
    }else{
          console.log(img1);
      /*--------------------------send to firestore database----------------------------*/
      ProjectDataService.addProject(payload).then(() => {
            toast.success("Project Added successfully");
            setLoader(false);
            ListProjects();
            console.log('New Project ',payload);
        }, (error) => {
            console.log(error.text);
            toast.error("Error!!!, Project not Added");
            setLoader(false);
        });
    };
    setTitle('');
    setFrontend('');
    setBackend('');
    setOthers('');
    setDescription('');
    setLinkGithub('');
    setLinkBlog('');
    setLinkDemo('');
    setCat('');setImg1([]);setImage(null);setImage1([]);
    setImg("");
    
 };
    const deleteHandler = async (id) => {
       await ProjectDataService.deleteProject(id);
       toast.success("Project successfully deleted");
       ListProjects();
    }
    const editHandler = (id) => {
       setDataId(id);
    }

    return (
        <div>
        
            <Navbar
                  navbarChange={navbarChange}
                  setNavbarChange={setNavbarChange}
            />
            {/* ========================== project manager =========================== */}
            <section className="contact section"id="contact">
                <span className="section__subtitle">Project Matters</span>
                <h2 className="section__title">Project Manager</h2>
                <div className="contact__container container grid">
                    <div className="contact__content">
                        <h3 className="contact__title">Project list</h3>
                        <div className="contact__info project__info">
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
                                    {works.map((item, i)=>(
                                        <tr className=""key={i}>
                                            <td>{i+1}</td>
                                            <td>{item.title}</td>
                                            <td>
                                                <div className="actions">{(RealUser && RealUser.email === process.env.REACT_APP_GUEST_EMAIL) ? (
                                                    <>
                                                        <i type="" className="bx bx-pen" onClick={() => editHandler(item.id) }></i>
                                                        <i type="" className="bx bx-trash"onClick={() => toast.error("Error!, You are not Authorized")}></i>
                                                    </>
                                                ) : (
                                                    <>
                                                        <i type="" className="bx bx-pen" onClick={() => editHandler(item.id) }></i>
                                                        <i type="" className="bx bx-trash"onClick={() => deleteHandler(item.id)}></i>
                                                    </>
                                                )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        
                            </div>
                        </div>
                    </div>
                        
                    <div className= "contact__content">
                        <h3 className="contact__title">{dataId ? "Edit Project":"Add new Project"}</h3>
                        <form action="" className="contact__form" ref={form}>
                           {projectpage ? (
                               
                           <div className="contact__section1">
                               {dataId ? (
                                    <div className="contact__form-img"> 
                                    <label htmlFor="" className="contact__form-tag">Project Image</label>
                                        {img ? (
                                        <img style={{width:200, height:150}}id="image" 
                                        alt="" src={img} 
                                        />) : (
                                            image ? (
                                                <img style={{width:200, height:150}}id="image" 
                                                alt="" src={URL.createObjectURL(image)} 
                                                />) : (
                                                    <img style={{width:200, height:150, }}id="image"
                                                    alt="" src="/image/default-img.png" 
                                                    />))}
                                        <input type="file" id="imagefile"accept="image/*" style={{display:"none"}}
                                            onChange={(e) => setImage(e.target.files[0])} />
                                            <label htmlFor="imagefile" onChange={(e) => setImage(e.target.files[0])}className="upload-icon">
                                            <i className="bx bx-upload"></i>
                                            </label>
                                    </div>
                                ) : (
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
                                            onChange={(e) => setImage(e.target.files[0])} />
                                            <label htmlFor="imagefile" onChange={(e) => setImage(e.target.files[0])}className="upload-icon">
                                            <i className="bx bx-upload"></i>
                                            </label>
                                    </div>
                               )}
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
                                    <input type="file" id="imagefile1" multiple accept="image/*"
                                                onChange={handleChange1} />
                                </div>
                            
                            </div>
                            <div className="contact__form-buttonSection">
                               <button className="button contact__Send-button" onClick={()=> setProjectpage(true)}>Back</button>
                               {!dataId ?(
                                <button className={loader ? "contact__Send-button button active" : "contact__Send-button button"} onClick={addData}>Add Project</button>
                               ) : (
                                (RealUser && RealUser.email === process.env.REACT_APP_GUEST_EMAIL) ? (
                                    <>
                                        <button className= "contact__Send-button button" onClick={unAuthenticated}>Update Project</button>
                                    </>
                                ) : (
                                    <>
                                        <button className= "contact__Send-button button" onClick={addData}>Update Project</button>
                                    </>
                                )
                                )
                               }
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
