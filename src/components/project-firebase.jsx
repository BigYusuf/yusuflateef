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
} from "firebase/firestore";

const projectCollectionRef = collection(db, "project");
const q = query(projectCollectionRef, orderBy("timestamp","desc"))
class ProjectDataService {
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
    return getDocs(q);
  };

  getProject = (id) => {
    const projectDoc = doc(db, "project", id);
    return getDoc(projectDoc);
  };
}

export default new ProjectDataService();
