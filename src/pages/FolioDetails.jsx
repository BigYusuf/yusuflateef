import React, { useRef, useEffect, useState } from 'react';
import { serverTimestamp } from "firebase/firestore";
import ProjectDataService from "../components/project-firebase";
import PortfolioSteps from '../components/PortfolioSteps'
import {ToastContainer, toast, Zoom} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ImageBox, InputBox, TextAreaBox } from '../components/CommonComponents';
import { handleUploadImg } from '../components/Utils';
import { useUserAuth } from '../context/UserAuthContext';

const FolioDetails = () => {
    const form = useRef();
    const [dataId, setDataId] = useState("Details");
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState(null);
    const [img, setImg] = useState("");
    const [completed, setCompleted] = useState("");
    const [experience, setExperience] = useState("");
    const [occupation, setOccupation] = useState("");
    const [support, setSupport] = useState("");
    const [formErrors, setFormErrors] = useState({})
    const {RealUser} = useUserAuth();

    useEffect(() => {
       
        const editDetails = async () => {
            try {
            const docSnap = await ProjectDataService.getFolioDetails();
            setName(docSnap.data().name);
            setTitle(docSnap.data().title);
            setDesc(docSnap.data().desc);
            setImg(docSnap.data().img);
            setCompleted(docSnap.data().completed);
            setExperience(docSnap.data().experience);
            setOccupation(docSnap.data().occupation);
            setSupport(docSnap.data().support);
            } catch (error) {}
        };
        if (dataId !== undefined && dataId !== "") {
            editDetails();
          }
       }, [dataId])
       
    useEffect(() => {
        if(image){
          handleUploadImg({url:img, setImg, image})
        }
    }, [image,img])

    const updateHandler = () => {
      const payload= {name, title, desc, img, occupation, completed, experience, support, createdAt: serverTimestamp()}
      if(RealUser && RealUser.email === process.env.REACT_APP_GUEST_EMAIL) {
          toast.success("Personal Details Updated");
      }else{
          ProjectDataService.updateFolioDetails( payload).then(() => {
            toast.success("Details Updated");
            }, (error) => {
                console.log(error.text);
                toast.error("Error!!!, Service not Updated");
            });
      }
      /*--------------------------send to firestore database----------------------------*/
        setName('');
        setTitle('');
        setDesc('');
        setImg('');
        setDataId('');
   }
   
   const navigate = useNavigate();

   const handleUpdate = (e) => {
      e.preventDefault();
      const errors = {};
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
        if(!title){
          errors.title = "Title is required!";
          setFormErrors(errors);
        }
        if(!desc){
            errors.desc = "Tell us about your self!";
            setFormErrors(errors);
          } else if(desc.length < 4){
            errors.desc = "About-me must be more than 3 characters";
            setFormErrors(errors);
        } 
        if(name && title && desc && desc.length > 3 && name.length > 3){
          updateHandler();
          
         navigate("/skills");

        };
    };
    
    return (
        <div>
            {/* ========================== contact =========================== */}
            <section className="">
                <PortfolioSteps step1></PortfolioSteps>
                <div className="contact__container1 container">
                    <div className= "contact__content">
                        <form action="" className="contact__form" ref={form}>
                            <ImageBox 
                                errData={formErrors.image} id1={"image"} id2={"imagefile"} 
                                labelName={"Portfolio Picture"} typeData={"file"} valueData={name}
                                nameData={"image"} setAny={setImage} imgUrl={img} newImage={image}
                            />
                            <InputBox 
                                errData={formErrors.name} labelName={"Names"} typeData={"text"} valueData={name}
                                nameData={"name"} setAny={setName} placeholderData={"Insert your Name"}
                            />
                            <InputBox 
                                errData={formErrors.title} labelName={"Title"} typeData={"text"} valueData={title}
                                nameData={"title"} setAny={setTitle} placeholderData={"Insert your Portfolio Title of desired name"}
                            />
                            <InputBox 
                                errData={formErrors.occupation} labelName={"Occupation"} typeData={"text"} valueData={occupation}
                                nameData={"occupation"} setAny={setOccupation} placeholderData={"Insert your Occupation"}
                            />
                            </form>
                    </div>
                    <div className= "contact__content">
                        <form action="" className="contact__form" ref={form}>
                            <TextAreaBox 
                                errData={formErrors.desc} labelName={"Tell Us About yourself"} typeData={"text"} valueData={desc}
                                nameData={"desc"} setAny={setDesc} placeholderData={"Insert a short about me"} colNumber={30}
                                rowNumber={10}
                            />
                            <InputBox 
                                errData={formErrors.experience} labelName={"Experience"} typeData={"number"} valueData={experience}
                                nameData={"experience"} setAny={setExperience} placeholderData={"Insert your number years experience"}
                            />
                            <InputBox 
                                errData={formErrors.completed} labelName={"Total Projects Completed"} typeData={"number"} valueData={completed}
                                nameData={"completed"} setAny={setCompleted} placeholderData={"Insert total number relevant projects completed"}
                            />
                            <InputBox 
                                errData={formErrors.support} labelName={"Do you render Assistance"} typeData={"text"} valueData={support}
                                nameData={"support"} setAny={setSupport} placeholderData={"Tell us how you help your clients"}
                            />
                            <div className="contact__form-buttonSection">

                                <button onClick={handleUpdate}className={"contact__Send-button button"}>Next</button>
                                
                            </div>
                            <ToastContainer draggable={false} transition={Zoom} autoClose={3000}/>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FolioDetails
