import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [users, setUsers] = useState([]);

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

    const navigate = useNavigate();
    const url = 'https://localhost:7195/users';

    const handleLogin = () => {
        let flag = false;
        users.map(user => {
            if (user.email === email && user.password === pass) {
                const user_data = {
                    id: user.id,
                    name: user.name
                }
                flag = true;
                navigate("/Menu", { state: user_data });
            }
        })
        if (flag === false) {
            alert("Wrong email or password! Try again with correct information!");
            setEmail('');
            setPass('');
        }
        
    }
    const handleForgot = () => {
        navigate("/Forgot");
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" id="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" onClick={() => handleLogin()}>Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            <button className="link-btn" onClick={() => handleForgot()} > Forgot your password? </button>
        </div>
    )
}