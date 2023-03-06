import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Login()
{
    //let [login, setLogin] = useState(false);

    let [newEmail, setNewEmail] = useState("");
    let [newPassword, setNewPassword] = useState("");
    let [newName, setNewName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const handleChangeEmail = (event) => {setEmail(event.target.value);}
    const handleChangePassword = (event) => {setPassword(event.target.value);}

    const handleChangeNewName = (event) => {setNewName(event.target.value);}
    const handleChangeNewEmail = (event) => {setNewEmail(event.target.value);}
    const handleChangeNewPassword = (event) => {setNewPassword(event.target.value);}

    const URL = "http://localhost:8080";



    function clearContents()
    {
        setEmail("");
        setPassword("");
        setNewName("");
        setNewEmail("");
        setNewPassword("");
    }

    function checkCredentials()
    {
        axios.get(URL + '/account/login', {
            params: {email: email, password: password},
        })
        .then (response => {
            console.log(response);
            //setLogin(response.data);
        })
        .catch(console.error);
    }

    function createAccount()
    {
        axios.post(URL + '/account/new', {
            name: newName,
            email: newEmail,
            password: newPassword,
        })
        .then (response => {
            console.log(response);
        })
        .catch(console.error);
    }
    //
    return (
    <>
                    <header class="navOverlayImage">
                <nav>
                    <ul>
                        <li class="loadInMovement"><a href="/" class="hover-underline-animation">HOME</a></li>
                        <li class="loadInMovement"><a href="/connect" class="hover-underline-animation">CONNECT</a></li>
                        <li class="loadInMovement"><a href="/people" class="hover-underline-animation">RESOURCES</a></li>
                        <li class="loadInMovement"><a href="/contact" class="hover-underline-animation">CONTACT</a></li>
                    </ul>
                </nav>
            </header>

            <button onClick={() => {
                    checkCredentials();
                    clearContents();
                }}>Login  </button>   

            <div class="vgrid">
                <div class="vgridright">
                <h2 class="textGreen">Login</h2>
                <input placeholder="Email" value={email} onChange={handleChangeEmail}></input>
                <input placeholder="Password" value={password} onChange={handleChangePassword}></input>
                <button onClick={() => {
                    checkCredentials();
                    clearContents();
                }}>Login  </button>   
                </div>
                
                <p class = "textGreen"> Or: </p>
                <div class = "vgridright">
                <h2 class="textGreen">Create Account</h2>
              <input placeholder="Username" value={newName} onChange={handleChangeNewName}></input>
            <input placeholder="Email" value={newEmail} onChange={handleChangeNewEmail}></input>
            <input placeholder="Password" value={newPassword} onChange={handleChangeNewPassword}></input>
            <button onClick={() => {
                createAccount();
                clearContents();
            }}>Create Account</button>  
                </div>
            </div>
            
            <div class = "vgridright">
                
            </div>



            <img src="backgroundbottom.jpg" alt="topvines" class="top_background"></img>


            <video class="videoClass" src="animation.mp4" loop="true" autoplay="true"></video>

    </>
    )


  
}