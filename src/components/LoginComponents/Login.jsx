import React, { Component, useEffect, useState } from 'react'
import LoginImage from "../../Images/LoginImage.png"
import '../../style/AssignmentsPage.css'
import '../../style/Button.css'
import '../../style/Card.css'
import '../../style/Image.css'
import StudentService from '../../Services/StudentService'
import SessionHandler from '../../SessionHandler/SessionHandler'

function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [route, setRoute] = useState();
    const [errorMessage, setErrorMessage] = useState();

    useEffect(() => {
        SessionHandler.clearStudentId();
        if(SessionHandler.getLoginAttempts >= 1){
            setErrorMessage("Wrong E-mail or Password, please try again")
        }
        else{
            setErrorMessage("");
        }
    })

    function changeEmailHandler(event){
        event.preventDefault();
        setEmail(event.target.value);
    }

    function changePasswordHandler(event){
        event.preventDefault();
        setPassword(event.target.value);
    }

    function handleLogin(){
        StudentService.getLogin(email, password).then((res) => {
            console.log(res.data.id);
            if(res.data.id === undefined){
                SessionHandler.setLoginAttemps();
                //setRoute("/login");
            }
            else
            {
                SessionHandler.setStudentId(res.data.id);
                SessionHandler.clearLoginAttemps();
                //setRoute("/")
            }
        })
    }

    return (
        <div className='d-flex align-items-start'>
            <div className='col-8' style={{ 'marginRight': '2%' }}>
                <img src={LoginImage} alt="fontys image" style={{ 'width': '100%', 'height': '100%vw' }} />
            </div>
            <div className='col-3' style={{ 'marginLeft': '3%', 'marginRight': '2%', 'marginTop': '5%' }}>
                <form>
                    <div className='form-group'>
                        <h5>Login</h5>
                        <h8>{errorMessage}</h8>
                        <label>E-mail address</label>
                        <input placeholder='E-mail address' name='email' className='form-control' value={email} onChange={changeEmailHandler} />
                        <label>Password</label>
                        <input type="password" placeholder='Password' name='password' className='form-control' value={password} onChange={changePasswordHandler} />
                        <a className="btn btn-refactoring text-white" onClick={handleLogin}  style={{ marginTop: '10px' }}>
                            Login
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;