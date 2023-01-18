import './Login.css';
import React from 'react';
import { useEffect, useState } from "react"
import { useNavigate, createSearchParams } from 'react-router-dom';

const SERVER = "http://localhost:3001"

function Login(){

    const navigate = useNavigate();
    const [students, setStudents] = useState([]);

    const getStudents = async () => {
        const response = await fetch(`${SERVER}/students`)
        const data = await response.json()
        setStudents(data);
    }

    useEffect(()=>{
        getStudents()
    },[]);

    return(
        <div className='loginPage'>
            <h1>Login Page </h1>
            <form>
                <label className = 'loginLabel' for = "email">Email</label>
                <input className = 'loginTextBox' type="email" id="email" name="email" placeholder="Enter your Email"/>
                <label className = 'loginLabel'for = "password">password</label>
                <input className = 'loginTextBox' type={"password"} placeholder="*********" id="password" name="password"/>
                
                <input className='loginButton' id='loginButton' type='reset' value='Sign in' onClick={ () =>{

                    let emailText = document.querySelector("#email");
                    let passwordText = document.querySelector('#password');

                    let studentArr = students.map((student) => {
                        return student;
                    });

                    studentArr.forEach(stud => {
                        if(emailText.value == stud.email){
                            if(passwordText.value == stud.password){
                                if(stud.userType === "MP"){
                                    navigate({
                                        pathname: "/projects",
                                        search:createSearchParams({
                                            email:stud.email,id:stud.id
                                        }).toString()
                                    });
                                }
                                else if (stud.userType === "TST") {
                                    navigate ({
                                        pathname: "/",
                                        search: createSearchParams({
                                            email:stud.email,
                                            id:stud.id
                                        }).toString()
                                    });
                                }
                            }
                            else {
                                alert("The password is wrong!");
                            }
                        }
                    });
                    
                }}/>
                
                <input className='loginButton' id='registerButton' type="button" value="Register" onClick={()=>{
                    navigate("/register");
                }}></input>

            </form>

        </div>
        
    )
}

export default Login;
  