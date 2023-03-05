import React, {useEffect, useState} from 'react';

export default function Login()
{
    let [login, setLogin] = useState(false);
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const handleChangeEmail = (event) => {setEmail(event.target.value);}
    const handleChangePassword = (event) => {setPassword(event.target.value);}

    function checkCredentials()
    {

    }
    return (
        <>
            <h1>Login</h1>
            <input placeholder="Email"></input>
            <input placeholder="Password"></input>
            <button onClick={() => {
                checkCredentials();
            }}>Login</button>
        </>
    )
}