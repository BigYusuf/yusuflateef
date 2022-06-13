import React, { useEffect, useState } from 'react';
import { serverTimestamp } from "firebase/firestore";
import ProjectDataService from "../components/project-firebase";
import PortfolioSteps from '../components/PortfolioSteps'
import {ToastContainer, toast, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { SelectBox } from '../components/CommonComponents';
import { useUserAuth } from '../context/UserAuthContext';
import { option1, option2 } from '../data';

const FolioSkills = () => {
    const [dataId, setDataId] = useState("Skills");
    const [stack1, setStack1] = useState("");
    const [stack2, setStack2] = useState("");
    const [stack3, setStack3] = useState("");
    const [stack4, setStack4] = useState("");
    const [stack5, setStack5] = useState("");
    const [stack6, setStack6] = useState("");
    const [stack7, setStack7] = useState("");
    const [stack8, setStack8] = useState("");

    const [tool1, setTool1] = useState("");
    const [tool2, setTool2] = useState("");
    const [tool3, setTool3] = useState("");
    const [tool4, setTool4] = useState("");
    const [tool5, setTool5] = useState("");
    const [tool6, setTool6] = useState("");
    const [tool7, setTool7] = useState("");
    const [tool8, setTool8] = useState("");
    const {RealUser} = useUserAuth();


    const navigate = useNavigate();

    const GoBack = () => {
        navigate("/details");
    }

    
    useEffect(() => {
       
        const editSkills = async () => {
            try {
            const docSnap = await ProjectDataService.getFolioSkills();
            setTool1(docSnap.data().tool1); setStack1(docSnap.data().stack1);
            setTool2(docSnap.data().tool2); setStack2(docSnap.data().stack2);
            setTool3(docSnap.data().tool3); setStack3(docSnap.data().stack3);
            setTool4(docSnap.data().tool4); setStack4(docSnap.data().stack4);
            setTool5(docSnap.data().tool5); setStack5(docSnap.data().stack5);
            setTool6(docSnap.data().tool6); setStack6(docSnap.data().stack6);
            setTool7(docSnap.data().tool7); setStack7(docSnap.data().stack7);
            setTool8(docSnap.data().tool8); setStack8(docSnap.data().stack8);
            } catch (error) {}
        };
        if (dataId !== undefined && dataId !== "") {
            editSkills();
          }
       }, [dataId])

    const updateHandler = () => {
        const payload= {stack1, stack2, stack3, stack4, stack5, stack6, stack7, stack8,
          tool1, tool2, tool3, tool4, tool5, tool6, tool7, tool8, createdAt: serverTimestamp()}
        if(RealUser && RealUser.email === process.env.REACT_APP_GUEST_EMAIL) {
            toast.success("Personal Skills Updated");
        }else{
            ProjectDataService.updateFolioSkills( payload).then(() => {
              toast.success("Skills Updated");
              }, (error) => {
                  console.log(error.text);
                  toast.error("Error!!!, Skills not Updated");
              });
        } 
        
        setDataId('');
   }
    
   
   const handleUpdate = (e) => {
        e.preventDefault();
        updateHandler();
        navigate("/links");
    };
    
    return (
        <div>
            {/* ========================== contact =========================== */}
            <section className="">
                <PortfolioSteps step1 step2></PortfolioSteps>
                <div className="contact__container container grid">
                    
                    <div className={"skills__content"}>
                        <h3 className="skills__title"> Stacks</h3>
                        <div className="skills__box">
                            <div className="skills__group">
                                <div className="skills__data">
                                    <SelectBox valueData={stack1} data={option1} setAny={setStack1}nameData="stack1" />
                                </div>
                                <div className="skills__data">
                                    <SelectBox valueData={stack2} data={option1} setAny={setStack2}nameData="stack2" />
                                </div>
                                <div className="skills__data">
                                    <SelectBox valueData={stack3} data={option1} setAny={setStack3}nameData="stack3" />
                                </div>
                                <div className="skills__data">
                                    <SelectBox valueData={stack4} data={option1} setAny={setStack4}nameData="stack4" />
                                </div>
                                
                            </div>
                            <div className="skills__group">
                                <div className="skills__data">
                                    <SelectBox valueData={stack5} data={option1} setAny={setStack5}nameData="stack5" />
                                </div>
                                <div className="skills__data">
                                    <SelectBox valueData={stack6} data={option1} setAny={setStack6}nameData="stack6" />
                                </div>
                                <div className="skills__data">
                                    <SelectBox valueData={stack7} data={option1} setAny={setStack7}nameData="stack7" />
                                </div>
                                <div className="skills__data">
                                    <SelectBox valueData={stack8} data={option1} setAny={setStack8}nameData="stack8" />
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className={"skills__content"}>
                        <h3 className="skills__title"> Tools</h3>
                        <div className="skills__box">
                            <div className="skills__group">
                                <div className="skills__data">
                                    <SelectBox valueData={tool1} data={option2} setAny={setTool1}nameData="tool1" />
                                </div>
                                <div className="skills__data">
                                    <SelectBox valueData={tool2} data={option2} setAny={setTool2}nameData="tool2" />
                                </div>
                                <div className="skills__data">
                                    <SelectBox valueData={tool3} data={option2} setAny={setTool3}nameData="tool3" />
                                </div>
                                <div className="skills__data">
                                    <SelectBox valueData={tool4} data={option2} setAny={setTool4}nameData="tool4" />
                                </div>
                                
                            </div>
                            <div className="skills__group">                                
                                <div className="skills__data">
                                    <SelectBox valueData={tool5} data={option2} setAny={setTool5}nameData="tool5" />
                                </div>
                                <div className="skills__data">
                                    <SelectBox valueData={tool6} data={option2} setAny={setTool6}nameData="tool6" />
                                </div>
                                <div className="skills__data">
                                    <SelectBox valueData={tool7} data={option2} setAny={setTool7}nameData="tool7" />
                                </div>
                                <div className="skills__data">
                                    <SelectBox valueData={tool8} data={option2} setAny={setTool8}nameData="tool8" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                
                    <div className="contact__form-buttonSection">
                        <button onClick={GoBack}className={"contact__Send-button button"}>Back</button>
                        <button onClick={handleUpdate}className={"contact__Send-button button"}>Next</button>
                            
                    </div>
                </div>
                <ToastContainer draggable={false} transition={Zoom} autoClose={3000}/>
            </section>
        </div>
    )
}

export default FolioSkills
