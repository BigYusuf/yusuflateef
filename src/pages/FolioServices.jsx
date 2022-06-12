import React, { useRef, useState, useEffect } from 'react';
import { serverTimestamp } from "firebase/firestore";
import ProjectDataService from "../components/project-firebase";
import {ToastContainer, toast, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUserAuth } from '../context/UserAuthContext';
import PortfolioSteps from '../components/PortfolioSteps';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const FolioServices = () => {
        const [dataId, setDataId] = useState("");
    const [title, setTitle] = useState("");
    const [list1, setList1] = useState("");
    const [list2, setList2] = useState("");
    const [list3, setList3] = useState("");
    const [desc, setDesc] = useState("");
    const [cat, setCat] = useState("");
    const [tablecat, setTablecat] = useState("");
    const [works, setWorks] = useState([]);
    const [loader, setLoader] = useState(false);
    const [navbarChange, setNavbarChange] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [header, setHeader] = useState(false);
    const form = useRef();
    const {RealUser} = useUserAuth();
    
  const ListServices = async () => {
    const data = await ProjectDataService.getAllServices();
    setWorks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }
  
    useEffect(() => {
        const ListServicesBycategory = async () => {
            const data = await ProjectDataService.getServicesByCategory(tablecat);
            setWorks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          }
        if(tablecat){
            ListServicesBycategory();
        }else{
            ListServices();
        }
   }, [tablecat])
   
   useEffect(() => {
       
    const editService = async () => {
        try {
        const docSnap = await ProjectDataService.getService(dataId);
        console.log("the record is :", docSnap.data());
        setTitle(docSnap.data().title);
        setList1(docSnap.data().list1);
        setList2(docSnap.data().list2);
        setList3(docSnap.data().list3);
        setDesc(docSnap.data().desc);
        setCat(docSnap.data().cat);
        } catch (error) {}
    };
    if (dataId !== undefined && dataId !== "") {
        editService();
      }
   }, [dataId])
    
    const unAuthenticated = (e) => {
        e.preventDefault();
        toast.error("Error!!!, You are not authenticated");
        navigate('/')
    } 
    const addData = (e) => {
        e.preventDefault();
        setLoader(true);
        
    const payload= {title, cat, desc, list1, list2, list3, createdAt: serverTimestamp()}
    if (dataId !== undefined && dataId !== "") {
        
        ProjectDataService.updateService(dataId, payload).then(() => {
            toast.success("Service Updated successfully");
            setLoader(false);
            ListServices();
            console.log('Updated Service ',payload);
        }, (error) => {
            console.log(error.text);
            toast.error("Error!!!, Service not Updated");
            setLoader(false);
        });
    }else{
        ProjectDataService.addService(payload).then(() => {
            toast.success("Service Added successfully");
            setLoader(false);
            ListServices();
            console.log('New Service ',payload);
        }, (error) => {
            console.log(error.text);
            toast.error("Error!!!, Service not Added");
            setLoader(false);
        });

    };
    setTitle('');
    setList1('');
    setList2('');
    setList3('');
    setDesc('');
    setCat('');
    
 };
    const deleteHandler = async (id) => {
       await ProjectDataService.deleteService(id);
       toast.success("Service successfully deleted");
       ListServices();
    }
    const editHandler = (id) => {
       setDataId(id);
    }
    
   const navigate = useNavigate();
   const GoBack = () => {
    navigate("/links");
    }
    return (
        <div>
            <Navbar
                  navbarChange={navbarChange} setNavbarChange={setNavbarChange}
                 showModal={showModal} setShowModal={setShowModal}
                 header={header} setHeader={setHeader}
            />
        
            {/* ========================== Service manager =========================== */}
            <section className="">
            <PortfolioSteps step1 step2 step3 step4></PortfolioSteps>
                <div className="contact__container container grid">
                    <div className="contact__content">
                        <h3 className="contact__title">Service list</h3>
                        <div className="contact__info project__info">
                            <div className="contact__card">
                                <i className="bx bx-data contact__card-icon"></i>
                                <h3 className="contact__card-title">Service Database</h3>
                                <div className="contact__form-div1">
                                    <select name="cat" value={tablecat} id="cat"onChange={(e) => setTablecat(e.target.value)} className="contact__select">
                                        <option className="contact__option" defaultValue value="">Select Service</option>
                                        <option className="contact__option" value="web">Web Service</option>
                                        <option className="contact__option" value="api">API Service</option>
                                        <option className="contact__option" value="gis">GIS Service</option>
                                        
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
                                                <div className="actions">
                                                    {(RealUser && RealUser.email === process.env.REACT_APP_GUEST_EMAIL) ? (
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
                        <h3 className="contact__title">{dataId ? `Edit ${title} Service`:"Add new Service"}</h3>
                        <form action="" className="contact__form" ref={form}>
                           
                               
                           <div className="contact__section1">
                                <div className="contact__form-div">
                                    <label htmlFor="" className="contact__form-tag">Service Title</label>
                                    <input
                                        type="text" name="name" value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required placeholder="Insert Service title"
                                        className="contact__form-input">

                                        </input>
                                </div>
                                <div className="contact__form-div contact__form-area">
                                    <label htmlFor="" className="contact__form-tag">Service Description</label>
                                    <textarea rows="10"required name="desc"  value={desc}
                                        onChange={(e) => setDesc(e.target.value)}
                                        id="" col="30" placeholder="Tell us about the service" 
                                        type="text" className= "contact__form-input">

                                        </textarea>
                                </div>
                                <div className= "contact__form-div">
                                    <label htmlFor="" className="contact__form-tag">List 1</label>
                                    <input type="text"name="list1" value={list1}
                                        onChange={(e) => setList1(e.target.value)}
                                        required placeholder="Insert List 1"
                                        className="contact__form-input">
                                    </input>
                                </div>
                                <div className= "contact__form-div">
                                    <label htmlFor="" className="contact__form-tag">List 2</label>
                                    <input type="text"name="list2" value={list2}
                                        onChange={(e) => setList2(e.target.value)}
                                        required placeholder="Insert List 2"
                                        className="contact__form-input">
                                    </input>
                                </div>
                                <div className= "contact__form-div">
                                    <label htmlFor="" className="contact__form-tag">List 3</label>
                                    <input type="text"name="list3" value={list3}
                                        onChange={(e) => setList3(e.target.value)}
                                        required placeholder="Insert List 3 "
                                        className="contact__form-input">
                                    </input>
                                </div>
                                <div className="contact__form-div">
                                    <select name="cat" value={cat} id="cat"onChange={(e) => setCat(e.target.value)} className="contact__select1">
                                        <option className="contact__option" defaultValue value="">Select Service</option>
                                        <option className="contact__option" value="web">Web Service</option>
                                        <option className="contact__option" value="api">API Service</option>
                                        <option className="contact__option" value="gis">GIS Service</option>
                                    </select>
                                </div>
                                <div className="contact__form-buttonSection">
                                <button className="button contact__Send-button" onClick={GoBack}>Back</button>
                                {!dataId ?(
                                <button className={loader ? "contact__Send-button button active" : "contact__Send-button button"} onClick={addData}>Add</button>
                                ) : (
                                    (RealUser && RealUser.email === process.env.REACT_APP_GUEST_EMAIL) ? (
                                        <>
                                            <button className= "contact__Send-button button" onClick={unAuthenticated}>Update</button>
                                        </>
                                    ) : (
                                        <>
                                            <button className= "contact__Send-button button" onClick={addData}>Update</button>
                                        </>
                                    )
                                    )
                               }
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

export default FolioServices
