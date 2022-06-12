import React, { useEffect, useRef, useState } from 'react';
import { serverTimestamp } from "firebase/firestore";
import ProjectDataService from "../components/project-firebase";
import PortfolioSteps from '../components/PortfolioSteps'
import {ToastContainer, toast, Zoom} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { FileBox, InputBox } from '../components/CommonComponents';
import { useUserAuth } from '../context/UserAuthContext';
import { handleUploadImg } from '../components/Utils';

const FolioLinks = () => {
    const form = useRef();
    const [dataId, setDataId] = useState("Links");
    const [CV, setCV] = useState("");
    const [fb, setFB] = useState("");
    const [lin, setLin] = useState("");
    const [web, setWeb] = useState("");
    const [blog, setBlog] = useState("");
    const [git, setGit] = useState("");
    const [twitter, setTwitter] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [email1, setEmail1] = useState("");
    const [email2, setEmail2] = useState("");
    const [email3, setEmail3] = useState("");
    const [file, setFile] = useState(null);
    const {RealUser} = useUserAuth();

    useEffect(() => {
       
        const editDetails = async () => {
            try {
            const docSnap = await ProjectDataService.getFolioLinks();
            console.log("the record is :", docSnap.data());
            setCV(docSnap.data().CV);
            setFB(docSnap.data().facebook);
            setLin(docSnap.data().linkedIn);
            setWeb(docSnap.data().website);
            setBlog(docSnap.data().blog);
            setGit(docSnap.data().github);
            setTwitter(docSnap.data().twitter);
            setWhatsapp(docSnap.data().phone);
            setEmail1(docSnap.data().email1);
            setEmail2(docSnap.data().email2);
            setEmail3(docSnap.data().email3);
            } catch (error) {}
        };
        if (dataId !== undefined && dataId !== "") {
            editDetails();
          }
       }, [dataId])
       
    useEffect(() => {
        if(file){
          handleUploadImg({url:CV, setImg:setCV, image:file})
        }
    }, [file,CV])

       console.log(CV)
   const updateHandler = () => {
    
    const payload= {facebook:fb, linkedin:lin, website:web,email1,email2,email3,twitter,phone:whatsapp,
        github:git,blog,CV, createdAt: serverTimestamp()}
    if(RealUser && RealUser.email === process.env.REACT_APP_GUEST_EMAIL) {
        toast.success("Personal Links Updated");
    }else{
        ProjectDataService.updateFolioLinks( payload).then(() => {
          toast.success("Personal Links Updated");
          console.log('Updated Links ',payload);
          }, (error) => {
              console.log(error.text);
              toast.error("Error!!!, Links not Updated");
          });
    }
    /*--------------------------send to firestore database----------------------------*/
      
    setFB('');
    setLin('');
    setWeb('');
    setDataId('');
     }
   
   const navigate = useNavigate();
   
   const GoBack = () => {
    navigate("/skills");
}

   const handleUpdate = (e) => {
      e.preventDefault();
          updateHandler();
         navigate("/services");

    };
    
    return (
        <div>
            {/* ========================== Links =========================== */}
            <section className="">
                <PortfolioSteps step1 step2 step3></PortfolioSteps>
                <div className="contact__container1 container">
                    <div className= "contact__content">
                        <form action="" className="contact__form" ref={form}>
                            <InputBox 
                                labelName={"Facebook"} typeData={"text"} valueData={fb}
                                nameData={"fb"} setAny={setFB} placeholderData={"Insert your Name"}
                            />
                            <InputBox 
                                labelName={"LinkedIn"} typeData={"text"} valueData={lin}
                                nameData={"lin"} setAny={setLin} placeholderData={"Insert your Portfolio Title of desired name"}
                            />
                            <InputBox 
                                labelName={"twitter"} typeData={"text"} valueData={twitter}
                                nameData={"twitter"} setAny={setTwitter} placeholderData={"Insert your Occupation"}
                            />
                            <InputBox 
                                labelName={"website"} typeData={"text"} valueData={web}
                                nameData={"website"} setAny={setWeb} placeholderData={"Insert your Occupation"}
                            />
                            <FileBox 
                            id={"file"} setAny={setFile} labelName={"CV File Upload"} typeData={"file"} valueData={CV}
                            />
                            </form>
                    </div>
                    <div className= "contact__content">
                        <form action="" className="contact__form" ref={form}>
                            <InputBox 
                                labelName={"WhatsApp Number"} typeData={"text"} valueData={whatsapp}
                                nameData={"whatsapp"} setAny={setWhatsapp} placeholderData={"Insert your number years experience"}
                            />
                            <InputBox 
                                labelName={"Github Address"} typeData={"text"} valueData={git}
                                nameData={"github"} setAny={setGit} placeholderData={"Insert your number years experience"}
                            />
                            <InputBox 
                                labelName={"Blog Address"} typeData={"text"} valueData={blog}
                                nameData={"blog"} setAny={setBlog} placeholderData={"Insert total number relevant projects completed"}
                            />
                            <InputBox 
                                labelName={"Email 1"} typeData={"email"} valueData={email1}
                                nameData={"email1"} setAny={setEmail1} placeholderData={"Tell us how you help your clients"}
                            />
                            <InputBox 
                                labelName={"Email 2"} typeData={"email"} valueData={email2}
                                nameData={"email2"} setAny={setEmail2} placeholderData={"Tell us how you help your clients"}
                            />
                            <InputBox 
                                labelName={"Email 3"} typeData={"email"} valueData={email3}
                                nameData={"email3"} setAny={setEmail3} placeholderData={"Tell us how you help your clients"}
                            />
                            <div className="contact__form-buttonSection">

                                <button onClick={GoBack}className={"contact__Send-button button"}>Back</button>
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

export default FolioLinks
