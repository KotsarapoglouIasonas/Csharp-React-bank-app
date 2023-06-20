import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './App.css';
import pic from "./Images/Bank.png";

function Forgot() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();
    //Get All the users into an array
    useEffect(() => {
        fetch('https://localhost:7195/users')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setUsers(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleReset = () => {
        let flag = false;
        users.map(user => {
            if (user.email === email) {
                const user_data = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: pass,
                    phone: user.phone
                }
                flag = true;
                const requestOptions = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(user_data)
                };
                fetch('https://localhost:7195/users', requestOptions);
                navigate("/");
            }
        })
        if (flag === false) {
            alert("The email that you gave doesnt exist");
            setEmail('');
            setPass('');
        }

    }

    const handleBack = () => {
        navigate("/");
    }

    return(
        <div className="DepositOwn">
            <img src={pic} className="LogoPages" />
            <div className="Column">
            <header className="TextTop">Reset your password</header>
                <div className="DepositContainer">
                    <div className="ForgotBox">
                        <form onSubmit={handleSubmit}>
                            <p className="ForgotP" >Email</p>
                            <input className="ForgotInput" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                            <p className="ForgotP" >Password</p>
                            <input className="ForgotInput" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /><br></br>
                            <button className="btnreset" type="submit" onClick={() => handleReset()}>Reset</button>
                        </form>
                        <br></br>
                        <button className="btnLogout" type="submit" onClick={() => handleBack()}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forgot;