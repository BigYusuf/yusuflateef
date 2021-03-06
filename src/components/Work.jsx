
import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSpring } from 'react-spring';
import { WorkList, WorkModal} from './ActiveList';
import ProjectDataService from "./project-firebase";
import {list} from '../data'

const Work = () => {
    const [selected, setSelected] = useState("web")
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState([])
    //const openModal = () =>{
      //  setSelected(prev => !prev)
   // }
  
   const ListProjects = async () => {
    const data = await ProjectDataService.getAllProjects();
    setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

   useEffect(() => {
    /*const ListProjectsBycategory = async () => {
      const data = await ProjectDataService.getProjectsByCategory(selected);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    if(selected){
        ListProjectsBycategory();
    }else{
        ListProjects();
    }
     */ 
    if(selected){
      ListProjects();
    }else{
      ListProjects();
  }
     
}, [selected])

/*
    useEffect(() => {
        switch (selected) {
            case 'web':
                setData(webData)
                break;
            case 'api':
                setData(APIData)
                break;
            case 'gis':
                setData(gisData)
                break;
            default:
                setData(APIData)
                break;
        }
    }, [selected])
    */
    const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
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
                    {data.filter(newdata => newdata.cat.includes(selected)).map((c, i) => (
                       <WorkModal key={i+1} title={c.title}
                       id={c.id} img={c.img} images={c.img1} current={current} 
                       prevSlide={prevSlide}
                       nextSlide={nextSlide} animation={animation} 
                       modalRef={modalRef}
                       demo={c.linkDemo} github={c.linkGithub} design={c.others}
                       backend={c.backend} frontend={c.frontend} desc={c.description}
                       closeModal={closeModal} active ={showModal === c.id} 
                       setShowModal={setShowModal}/>
                    ))}
                </div>
            </section>
        </div>
    )
}
export default Work;