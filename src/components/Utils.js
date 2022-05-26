
import { app } from '../firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
export const handleTheme = () => {
    const themeButton = document.getElementById('theme-button')
     const lightTheme = 'light-theme';
     const iconTheme = 'bx-sun';
     const body = document.body;

     //previously selected topic (if user selected)
     const selectedTheme = localStorage.getItem('selected-theme')
     const selectedIcon = localStorage.getItem('selected-icon')

     //we obtain the current theme that the interface has by validating the light-theme
     const getCurrentTheme = () => body.classList.contains(lightTheme) ? 'dark' : 'light'
     const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

     //we validate if the user previously chose a topic
     if(selectedTheme){
         //if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
         body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
         themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
     }
     body.classList.toggle(lightTheme)
     themeButton.classList.toggle(iconTheme)
     //we save the theme and the current icon that the user chose
     localStorage.setItem('selected-theme', getCurrentTheme())
     localStorage.setItem('selected-icon', getCurrentIcon())
 }
 
export const handleUpload = ({url, setUrl, image}) => {
    const fileName = `images/${new Date().getTime() + image.name}`;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setUrl(url);
        });
      }
    );
}
 
export const handleUpload1 = ({url, setUrl, images}) => {
    const promises = [];
    images.map((image) => {
        
        const fileName = `images/${new Date().getTime() + image.name}`;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, image);
        promises.push(uploadTask);
            uploadTask.on(
            "state_changed",
            (snapshot) => {},
            (error) => {
                // Handle unsuccessful uploads
            },
            async () => {
            await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                setUrl((prevState) => [...prevState, url]);
                });
            }
            );
    
    });
    Promise.all(promises)
      .then(() => console.log("All images uploaded"))
      .catch((err) => console.log(err));
};
