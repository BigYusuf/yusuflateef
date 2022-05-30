import React, {useState} from 'react'
import LoginComponent from '../components/LoginComponent'

const Login = () => {
    const [password, setPassword] = useState("")
    const [mail, setMail] = useState("")
    return (
        <div>
            <LoginComponent 
            password={password} setPassword={setPassword}
            mail={mail} setMail={setMail}
            />
        </div>
    )
}

export default Login
