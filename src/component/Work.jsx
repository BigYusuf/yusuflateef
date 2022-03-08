
import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import {Link} from "react-router-dom";
import { WorkList} from './ActiveList';
import {list, allData, webData, APIData, brandData} from '../dummyData'

const Work = () => {
    const [selected, setSelected] = useState("web")
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState([])
    const openModal = () =>{
        setShowModal(prev => !prev)
    }

    useEffect(() => {
        switch (selected) {
            case 'all':
                setData(allData)
                break;
            case 'web':
                setData(webData)
                break;
            case 'api':
                setData(APIData)
                break;
            case 'design':
                setData(brandData)
                break;
            default:
                setData(allData)
                break;
        }
    }, [selected])
    const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
  const slides = data;
   const [current, setCurrent] = useState(0);
   const length = slides.length;

   const nextSlide = () =>{
       setCurrent(current < length ? current + 1 : 0);
   };
   const prevSlide = () =>{
       setCurrent(current > 0 ? current - 1 : length);
   };


    return (
        <div>
            {/* ========================== Work =========================== */}
            <section className="work section"id="work" >
                <span className="section__subtitle">My Portfolio</span>
                <h2 className="section__title">Recent Works</h2>
                
                <div className="work__filters">
                    {list.map((item) => (
                        <WorkList key={item.id} title={item.title} id={item.id} active={selected === item.id} setSelected={setSelected}/>
                    ))}
                </div>

                <div className="work__container container grid">
                    {data.map((d) => (
                        <div className="work__card" key={d.id}>
                        <img src={d.img} alt="" className="work__img"/>
                        <h3 className="work__title">{d.title}</h3>
                        <Link to="#" onClick = {openModal}className="work__button">
                            Demo <i className="bx bx-right-arrow-alt work__icon"></i>
                        </Link>
                        {showModal && <div>
                <div className="work__modal active-modal" onClick={closeModal} ref={modalRef}>
                    <animated.div style={animation}>
                        <div className="work__modal-content">
                        <i className="bx bx-x work__modal-close" onClick={() => setShowModal(prev => !prev)}></i>
                        <div className="work__modal-contentUp">
                        <h3 className="work__modal-title">{d.title}</h3>
                        </div>
                        <div className="work__modal-contentDown">
                            <div className="work__modal-left">
                            <i className="bx bx-left-arrow work__modal-icon" onClick={prevSlide} ></i>
                       
                                <div className="wrapper__img">
                                    {/*imgData.map((d, index)=> {
                                        return( 
                                        <div key={index} className={index === current ? 'slide active': 'slide'}>
                                        {index ===current && (<img  src={d.img} alt="" className="work__modal-image"/>)}
                                        
                                       </div>
                                        )
                                    })*/}
                                     {d.images.map((e, index)=> {
                                        return( 
                                        <div key={index} className={index === current ? 'slide active': 'slide'}>
                                        {index === current && (<img  src={e.img1} alt="" className="work__modal-image"/>)}
                                        
                                       </div>
                                        )
                                    })}
                                </div>
                            <i className="bx bx-right-arrow work__modal-icon" onClick={nextSlide}></i>
                            </div>
                            <div className="work__modal-right">
                                <p className="work__modal-description">
                                    Service with more than 3 years of experience.
                                    Providing quality work to clients and companies
                                </p>
                                <ul className="work__modal-list">
                                    <li className="work__modal-item">
                                        <i className="bx bx-check work__modal-icon"></i>
                                        <p className="work__modal-info">
                                            Frontend: React, Native CSS
                                        </p>
                                    </li>
                                    <li className="work__modal-item">
                                        <i className="bx bx-check work__modal-icon"></i>
                                        <p className="work__modal-info">
                                            Backend: Node, Express, MongoDB
                                        </p>
                                    </li>
                                    <li className="work__modal-item">
                                        <i className="bx bx-check work__modal-icon"></i>
                                        <p className="work__modal-info">
                                            Design & Planning: MS Excel
                                        </p>
                                    </li>
                                </ul>
                                <div className="work__modal-buttonGroup">
                                    <Link to="#" className="work__button">
                                        Demo <i className="bx bx-right-arrow-alt work__icon"></i>
                                    </Link>
                                    <Link to="#" className="work__button">
                                        Real <i className="bx bx-right-arrow-alt work__icon"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </div>
                    </animated.div>
                </div>
            </div>
            }
                         </div>
                    
                    ))}
                </div>
               
            </section>
        </div>
    )
}
export default Work;