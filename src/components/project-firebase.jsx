import { db } from '../firebase';

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  orderBy,
  query,
  where
} from "firebase/firestore";

const emailCollectionRef = collection(db, "contact");
const projectCollectionRef = collection(db, "project");
const testimonialCollectionRef = collection(db, "testimonial");
class ProjectDataService {
  /*-------------------------- Projects -----------------------------------------*/
  addProject = (newProject) => {
    return addDoc(projectCollectionRef, newProject);
  };

  updateProject = (id, updatedProject) => {
    const projectDoc = doc(db, "project", id);
    return updateDoc(projectDoc, updatedProject);
  };

  deleteProject = (id) => {
    const projectDoc = doc(db, "project", id);
    return deleteDoc(projectDoc);
  };
  getAllProjects = () => {
    return getDocs(projectCollectionRef, orderBy('createdAt'));
  };
  getProjectsByCategory = (category) => {
    return getDocs(query(projectCollectionRef, where("cat","==", category), orderBy('createdAt')));
  };
  getProject = (id) => {
    const projectDoc = doc(db, "project", id);
    return getDoc(projectDoc);
  };
  /*-------------------------- Emails -----------------------------------------*/
  addEmail = (newProject) => {
    return addDoc(emailCollectionRef, newProject);
  };
  /*-------------------------- Testimonials -----------------------------------------*/
  addTestimonial = (newTestimonial) => {
    return addDoc(testimonialCollectionRef, newTestimonial);
  };
  updateTestimonial = (id, updatedTestimonial) => {
    const projectDoc = doc(db, "testimonial", id);
    return updateDoc(projectDoc, updatedTestimonial);
  };
  deleteTestimonial = (id) => {
    const projectDoc = doc(db, "testimonial", id);
    return deleteDoc(projectDoc);
  };
  getAllTestimonial = () => {
    return getDocs(testimonialCollectionRef, orderBy('createdAt'));
  };
  getTestimonialByCategory = (category) => {
    return getDocs(query(projectCollectionRef, where("cat","==", category), orderBy('createdAt')));
  };
  getTestimonial = (id) => {
    const projectDoc = doc(db, "testimonial", id);
    return getDoc(projectDoc);
  };
}

export default new ProjectDataService();
