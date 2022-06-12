import React, {useState} from 'react'
import LoginComponent from '../components/LoginComponent'
import Navbar from '../components/Navbar'

const Login = () => {
    const [password, setPassword] = useState("")
    const [mail, setMail] = useState("")
    const [navbarChange, setNavbarChange] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [header, setHeader] = useState(true);
    return (
        <div>
            
            <Navbar
                  navbarChange={navbarChange} setNavbarChange={setNavbarChange}
                  showModal={showModal} setShowModal={setShowModal}
                  header={header} setHeader={setHeader}
            />
            <LoginComponent 
            password={password} setPassword={setPassword}
            mail={mail} setMail={setMail}
            />
        </div>
    )
}

export default Login
