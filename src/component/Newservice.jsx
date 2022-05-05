import React, { useState } from 'react';
import {ModalList} from './ActiveList';
//import {Link} from "react-router-dom";

const Newservice = () => {
    // modal starts
    const [selected, setSelected] = useState("");
    


       
        const list1 = [
        {id: 1, title:"Product "},
        {id: 2, title:"UI/UX "},
        {id: 3, title:"Visual "},
        {id: 4, title:"Design"},
        {id: 5, title:"Brand"},
        {id: 6, title:"Art"},
    ];
      
    return (
        <div>
            
    <section className="services section">
        <span className="section__subtitle">Modal Testing</span>
        <h2 className="section__title">Modal Testing</h2>
        
        <div className="services__container container grid">
        {list1.map((c) =>(
        
        <ModalList key={c.id} title={c.title} id={c.id} active ={selected === c.id} setSelected={setSelected}/>
    
    ))}
       </div>
    </section>
        </div>
    )
}

export default Newservice
