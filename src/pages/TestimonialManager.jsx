import React, { useRef, useState, useEffect } from 'react';
import { serverTimestamp } from "firebase/firestore";
import {handleUploadImg} from '../components/Utils';
import ProjectDataService from "../components/project-firebase";
import {ToastContainer, toast, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUserAuth } from '../context/UserAuthContext';
import Navbar from '../components/Navbar';

const TestimonialManager = () => {
    const [dataId, setDataId] = useState("");
    const [title, setTitle] = useState("");
    const [occupation, setOccupation] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [tablestatus, setTablestatus] = useState("");
    const [image, setImage] = useState(null);
    const [img, setImg] = useState("");
    const [works, setWorks] = useState([]);
    const [loader, setLoader] = useState(false);
    const form = useRef();
    const {RealUser} = useUserAuth();
    const [navbarChange, setNavbarChange] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [header, setHeader] = useState(true);
    
  const ListTestimonial = async () => {
    const data = await ProjectDataService.getAllTestimonial();
    setWorks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }
  

    useEffect(() => {
        const ListTestimonialBycategory = async () => {
            const data = await ProjectDataService.getTestimonialByCategory(tablestatus);
            setWorks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          }
        if(tablestatus){
            ListTestimonialBycategory();
        }else{
            ListTestimonial();
        }
   }, [tablestatus])
   
   useEffect(() => {
       
    const editTestimonial = async () => {
        try {
        const docSnap = await ProjectDataService.getTestimonial(dataId);
        console.log("the record is :", docSnap.data());
        setTitle(docSnap.data().title);
        setOccupation(docSnap.data().occupation);
        setImg(docSnap.data().img);
        setDescription(docSnap.data().description);
        setStatus(docSnap.data().status);
        } catch (error) {}
    };
    if (dataId !== undefined && dataId !== "") {
        editTestimonial();
      }
   }, [dataId])

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
    
    const payload= {title, occupation, status, img, description, createdAt: serverTimestamp()}
    if (dataId !== undefined && dataId !== "") {
        
        ProjectDataService.updateTestimonial(dataId, payload).then(() => {
            toast.success("Testimonial Updated successfully");
            setLoader(false);
            ListTestimonial();
            console.log('Updated Testimonial ',payload);
        }, (error) => {
            console.log(error.text);
            toast.error("Error!!!, Testimonial not Updated");
            setLoader(false);
        });
      }else{
        //
          
        //
      /*--------------------------send to firestore database----------------------------*/
      ProjectDataService.addTestimonial(payload).then(() => {
            toast.success("Testimonial Added successfully");
            setLoader(false);
            ListTestimonial();
            console.log('New Testimonial ',payload);
        }, (error) => {
            console.log(error.text);
            toast.error("Error!!!, Testimonial not Added");
            setLoader(false);
        });
    };
    setTitle('');
    setOccupation('');
    setDescription('');
    setStatus('');setImage(null);
    setImg("");
    
 };
    const deleteHandler = async (id) => {
       await ProjectDataService.deleteTestimonial(id);
       toast.success("Testimonial successfully deleted");
       ListTestimonial();
    }
    const editHandler = (id) => {
       setDataId(id);
    }

    return (
        <div>
        
            <Navbar
                  navbarChange={navbarChange} setNavbarChange={setNavbarChange}
                  showModal={showModal} setShowModal={setShowModal}
                  header={header} setHeader={setHeader}
            />
            {/* ========================== Testimonial manager =========================== */}
            <section className="contact section"id="contact">
                <span className="section__subtitle">Say Your Mind</span>
                <h2 className="section__title">Testimonial Manager</h2>
                <div className="contact__container container grid">
                    <div className="contact__content">
                        <h3 className="contact__title">Testimonial list</h3>
                        <div className="contact__info project__info">
                            <div className="contact__card">
                                <i className="bx bx-data contact__card-icon"></i>
                                <h3 className="contact__card-title">Testimonial Database</h3>
                                <div className="contact__form-div1">
                                    <select name="status" value={tablestatus} id="status"onChange={(e) => setTablestatus(e.target.value)} className="contact__select">
                                        <option className="contact__option" defaultValue value="">Select Status</option>
                                        <option className="contact__option" value="enable">Enabled</option>
                                        <option className="contact__option" value="disable">Disabled</option>
                                        
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
                        <h3 className="contact__title">{dataId ? "Edit Testimonial":"Add new Testimonial"}</h3>
                        <form action="" className="contact__form" ref={form}>
                               
                           <div className="contact__section1">
                               {dataId ? (
                                    <div className="contact__form-img"> 
                                    <label htmlFor="" className="contact__form-tag">User Image</label>
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
                                    <label htmlFor="" className="contact__form-tag">User Image</label>
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
                                    <label htmlFor="" className="contact__form-tag">Name</label>
                                    <input
                                        type="text" name="name" value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required placeholder="Insert your name" 
                                        className="contact__form-input">

                                        </input>
                                </div>
                                <div className= "contact__form-div">
                                    <label htmlFor="" className="contact__form-tag">Occupation</label>
                                    <input type="text"name="occupation" value={occupation}
                                        onChange={(e) => setOccupation(e.target.value)}
                                        required placeholder="Insert your Occupation "
                                        className="contact__form-input">
                                    </input>
                                </div>
                                <div className="contact__form-div">
                                    <select name="status" value={status} id="status"onChange={(e) => setStatus(e.target.value)} className="contact__select1">
                                        <option className="contact__option" defaultValue value="">Select Status</option>
                                        <option className="contact__option" value="enable">Enabled</option>
                                        <option className="contact__option" value="disable">Disabled</option>
                                    </select>
                                </div>
                                <div className="contact__form-div contact__form-area">
                                    <label htmlFor="" className="contact__form-tag">What do you think about my service</label>
                                    <textarea rows="10"required name="description"  value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        id="" col="30" placeholder="Tell us about the experience with us" 
                                        type="text" className= "contact__form-input">

                                        </textarea>
                                </div>
                                {!dataId ?(
                                <button className={loader ? "contact__Send-button button active" : "contact__Send-button button"} onClick={addData}>Add Testimonial</button>
                               ) : (
                               RealUser? (
                                    <>
                                        <button className= "contact__Send-button button" onClick={addData}>Update Testimonial</button>
                                    </>
                                ) : (
                                    <>
                                        <button className= "contact__Send-button button" onClick={unAuthenticated}>Update Testimonial</button>
                                    </>
                                )
                                )
                               }
                            </div>
                            <ToastContainer draggable={false} transition={Zoom} autoClose={3000}/>
                        
                        </form>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default TestimonialManager
