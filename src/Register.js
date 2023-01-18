import './Register.css';
import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigate, createSearchParams} from 'react-router-dom';


function Register(atribute){

    const navigate = useNavigate();

    const {onAdd} = atribute;
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] =useState ('');
    const [userType, setUserType] = useState ("TST","MP");

    const addStudent = () => {
        onAdd({
            password,name,secondName,email,birthday,userType
        });
    }

    return(
        <div className='registerPage'>
            <h1> Register page </h1>
            <form className='registerForm'>
                <div className='FormElements'>

                    <label className='registerLabel' for= "name">Name</label>
                    <input className='registerTextBox' id="name " type={"text"} onChange = {(e) =>setName(e.target.value)}/>

                    <label className='registerLabel' for= "secondName">Second Name</label>
                    <input className='registerTextBox' id="secondName " type={"text"} onChange = {(e) =>setSecondName(e.target.value)}/>

                    <label className='registerLabel' for= "email">Name</label>
                    <input className='registerTextBox' id="email " type={"text"} onChange = {(e) =>setEmail(e.target.value)}/>

                    <label className='registerLabel' for= "password">Name</label>
                    <input className='registerTextBox' id="password " type={"text"} onChange = {(e) =>setPassword(e.target.value)}/>

                    <label className='registerLabel' for= "birthday">Name</label>
                    <input className='registerTextBox' id="birthday " type={"text"} onChange = {(e) =>setBirthday(e.target.value)}/>

                    <label className='registerLabel' for= "userType">Name</label>
                    <select className='registerTextBox' id="userType " type={"text"} onChange = {(e) =>setUserType(e.target.value)}>
                        <option className='typeOption' id="optTester" value={"TST"}>TST</option>
                        <option className='typeOption' id= "optDeveloper" value={"MP"}>MP</option>
                    </select>

                </div>
            </form>
        </div>
    )
}