
import React, { useState, useEffect } from 'react';
import { serviceModalData, Data1, Data2, Data3 } from '../dummyData';
import { ServicesList } from './ActiveList';

const Services = () => {
    
    const [selected, setSelected] = useState("");
    const [data, setData] = useState([]);
    useEffect(() => {
        switch (selected) {
            case 24:
                setData(Data1)
                break;
            case 25:
                setData(Data2)
                break;
            case 26:
                setData(Data3)
                break;
        
            default:
                
                break;
        }
    }, [selected])
    return (
        <div>
            {/* ========================== services=========================== */}
            <section className="services section">
                <span className="section__subtitle">My Services</span>
                <h2 className="section__title">What I Offer</h2>
                
                <div className="services__container container grid">
                   {serviceModalData.map((e) => (
                       <ServicesList key = {e.id} title1 = {e.title1} title2 ={e.title2} description ={e.description} li1 ={e.li1} li2 ={e.li2} li3 ={e.li3} active={selected === e.id} setSelected={setSelected}
                      />
                   ))}
                   
                </div>
            </section>
        </div>
    )
}

export default Services
