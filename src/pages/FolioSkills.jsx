import React, { useState } from 'react';
import { serverTimestamp } from "firebase/firestore";
//import ProjectDataService from "../components/project-firebase";
import PortfolioSteps from '../components/PortfolioSteps'
import {ToastContainer, toast, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { SelectBox } from '../components/CommonComponents';

const FolioSkills = () => {
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

    const [loader, setLoader] = useState("");
    const navigate = useNavigate();

    const GoBack = () => {
        navigate("/details");
    }
    const updateHandler = () => {
      setLoader(true);
      
      /*--------------------------send to firestore database----------------------------*/
      
      const payload= {stack1, stack2, stack3, stack4, stack5, stack6, stack7, stack8,
        tool1, tool2, tool3, tool4, tool5, tool6, tool7, tool8, createdAt: serverTimestamp()}
      toast.success("Updated");
          
         navigate("/links");
        
   }
    
    return (
        <div>
            {/* ========================== contact =========================== */}
            <section className="contact section"id="contact">
                <PortfolioSteps step1 step2></PortfolioSteps>
                <div className="contact__container container grid">
                    
                    <div className={"skills__content"}>
                        <h3 className="skills__title"> Stacks</h3>
                        <div className="skills__box">
                            <div className="skills__group">
                                
                                <div className="skills__data">
                                    <SelectBox valueData={stack1} 
                                    setAny={setStack1}nameData="stack1"
                                    />
                                </div>
                                <div className="skills__data">
                                    <SelectBox valueData={stack2} 
                                    setAny={setStack2}nameData="stack2"
                                    />
                                </div>
                                <div className="skills__data">
                                    <SelectBox valueData={stack3} 
                                    setAny={setStack3}nameData="stack3"
                                    />
                                </div>
                                <div className="skills__data">
                                    <SelectBox valueData={stack4} 
                                    setAny={setStack4}nameData="stack4"
                                    />
                                </div>
                                
                            </div>
                            <div className="skills__group">
                                
                                <div className="skills__data">
                                    <SelectBox valueData={stack5} 
                                    setAny={setStack5}nameData="stack5"
                                    />
                                </div>
                                <div className="skills__data">
                                    <SelectBox valueData={stack6} 
                                    setAny={setStack6}nameData="stack6"
                                    />
                                </div>
                                <div className="skills__data">
                                    <SelectBox valueData={stack7} 
                                    setAny={setStack7}nameData="stack7"
                                    />
                                </div>
                                <div className="skills__data">
                                    <SelectBox valueData={stack8} 
                                    setAny={setStack8}nameData="stack8"
                                    />
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className={"skills__content"}>
                        <h3 className="skills__title"> Tools</h3>
                        <div className="skills__box">
                            <div className="skills__group">
                                
                                <div className="skills__data">
                                    <SelectBox valueData={tool1} 
                                    setAny={setTool1}nameData="tool1"
                                    />
                                </div>
                                <div className="skills__data">
                                    <SelectBox valueData={tool2} 
                                    setAny={setTool2}nameData="tool2"
                                    />
                                </div>
                                <div className="skills__data">
                                    <SelectBox valueData={tool3} 
                                    setAny={setTool3}nameData="tool3"
                                    />
                                </div>
                                <div className="skills__data">
                                    <SelectBox valueData={tool4} 
                                    setAny={setTool4}nameData="tool4"
                                    />
                                </div>
                                
                            </div>
                            <div className="skills__group">
                                
                                <div className="skills__data">
                                    <SelectBox valueData={tool5} 
                                    setAny={setTool5}nameData="tool5"
                                    />
                                </div>
                                <div className="skills__data">
                                    <SelectBox valueData={tool6} 
                                    setAny={setTool6}nameData="tool6"
                                    />
                                </div>
                                <div className="skills__data">
                                    <SelectBox valueData={tool7} 
                                    setAny={setTool7}nameData="tool7"
                                    />
                                </div>
                                <div className="skills__data">
                                    <SelectBox valueData={tool8} 
                                    setAny={setTool8}nameData="tool8"
                                    />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                
                </div>
                    <div className="contact__form-buttonSection">
                        <button onClick={GoBack}className={"contact__Send-button button"}>Back</button>
                        <button onClick={updateHandler}className={loader ? "contact__Send-button button active" : "contact__Send-button button"}>Next</button>
                            
                    </div>
                <ToastContainer draggable={false} transition={Zoom} autoClose={3000}/>
            </section>
        </div>
    )
}

export default FolioSkills
