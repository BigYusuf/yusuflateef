import React, { useRef, useState, useCallback, useEffect } from 'react';
import {ToastContainer, toast, Zoom} from 'react-toastify';
import Slider from "react-slick";
import ProjectDataService from "./project-firebase";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serverTimestamp } from 'firebase/firestore';
import { CreateTestimonialModal } from './ActiveList';
import { handleUploadImg } from './Utils';



const Testimonials = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [title, setTitle] = useState("");
  const [occupation, setOccupation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [img, setImg] = useState("");
  const [formErrors, setFormErrors] = useState({})
  const [data, setData] = useState([])
  const [projectpage, setProjectpage] = useState(true);
  const form = useRef();
  
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal1(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal1) {
        setShowModal1(false);
      }
    },
    [setShowModal1, showModal1]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
  
   const handleshowModal1 = () => {
       setShowModal1(!showModal1);
   }

    var settings = {
        className: "center",
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 2
       }
     },
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 1,
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
       //  centerPadding: "60px",
       }
     }
    ]
    };
    
  const ListTestimonial = async () => {
    const data = await ProjectDataService.getAllTestimonial();
    setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  useEffect(() => {
    ListTestimonial();
}, [])
  useEffect(() => {
    if(image){
      handleUploadImg({url:img, setImg, image})
    }
}, [image,img])
    const addData = (e) => {
      e.preventDefault();
      const errors = {};
        if(!title){
            errors.name = "Name is required!";
            setProjectpage(true);
            setFormErrors(errors);
        } else if(title.length < 4){
            errors.name = "Name must be more than 3 characters";
            setFormErrors(errors);
        } else if(title.length > 20){
            errors.name = "Name must not be more than 20 characters";
            setFormErrors(errors);
        }
        if(!occupation){
            errors.occupation = "Occupation is required!";
            setFormErrors(errors);
        }
        if(!image){
            errors.occupation = "Image is required!";
            setProjectpage(true);
            setFormErrors(errors);
        }
        if(!description){
            errors.description = "Message is required!";
            setFormErrors(errors);
        } else if(description.length < 4){
            errors.description = "Message must be more than 3 characters";
            setFormErrors(errors);
        } 
        if(title && occupation && description && description.length > 3 && title.length > 3){
            addDataHandler()
        };
   };
   const addDataHandler = () => {
     
    const payload= {title, occupation, status:"enable", img: img, description, createdAt: serverTimestamp()}
     
    /*--------------------------send to firestore database----------------------------*/
    ProjectDataService.addTestimonial(payload).then(() => {
          toast.success("Testimonial Added successfully");
          ListTestimonial();
        }, (error) => {
          toast.error("Error!!!, Testimonial not Added");
          
        });
      setShowModal1(false);
      setTitle('');
      setOccupation('');
      setDescription('');
      ;setImage(null);
      setImg("");

   }

    return (
        <div>
             {/* ========================== testimonial =========================== */}
            <section className="testimonial section">
                <span className="section__subtitle">My clients say</span>
                <h2 className="section__title">Testimonial</h2>
                
                  <Slider {...settings} className="testimonial__container container grid">
                      {data.filter(newdata => newdata.status.includes("enable")).map((d) => (
                          
                          <div className="testimonial__card" key= {d.id}>
                            <img src={d.img} alt="" className="testimonial__img"/>
                            <h3 className="testimonial__name">{d.title}</h3>
                            <p className="testimonial__description">
                              {d.description}
                            </p>
                          </div>
                      ))}
                          <div className="testimonial__card" >
                            
                            <h3 className="testimonial__name">Say Something about Me</h3>
                            <div className="testimonial__logo"onClick={handleshowModal1}>
                              <i className="bx bx-plus testimonial__addlogo" onClick={() => setShowModal1(prev => !prev)}></i>
                            </div>
                          </div>
                    
                  </Slider>

                  <div className="testimonail__add">
                       {/* show home modal*/}
                  <CreateTestimonialModal
                  form={form} showModal1={showModal1} setShowModal1={setShowModal1} 
                  closeModal={closeModal} setProjectpage={setProjectpage} projectpage={projectpage}
                  modalRef={modalRef} image={image} setImage={setImage} title={title} setTitle={setTitle} 
                  occupation={occupation} setOccupation={setOccupation} formErrors={formErrors}
                  description={description} setDescription={setDescription} addData={addData}
                      />
                       <ToastContainer draggable={false} transition={Zoom} autoClose={3000}/>
                    

                  </div>
            </section>
        </div>
    )
}

export default Testimonials
