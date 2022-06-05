import React, {useState} from 'react'
import LoginComponent from '../components/LoginComponent'
import Navbar from '../components/Navbar'

const Login = () => {
    const [password, setPassword] = useState("")
    const [mail, setMail] = useState("")
    const [navbarChange, setNavbarChange] = useState(true);
    return (
        <div>
            
            <Navbar
                  navbarChange={navbarChange}
                  setNavbarChange={setNavbarChange}
            />
            <LoginComponent 
            password={password} setPassword={setPassword}
            mail={mail} setMail={setMail}
            />
        </div>
    )
}

export default Login
