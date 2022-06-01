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
//const q = query(projectCollectionRef, orderBy("timestamp","desc"))

//const q = query(projectCollectionRef, where("cat","==","web"))
class ProjectDataService {
  addProject = (newProject) => {
    return addDoc(projectCollectionRef, newProject);
  };
  addEmail = (newProject) => {
    return addDoc(emailCollectionRef, newProject);
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
}

export default new ProjectDataService();
