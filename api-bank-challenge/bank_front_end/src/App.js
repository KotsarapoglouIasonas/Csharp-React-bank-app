import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import Webimage from "./Images/WebImage";
import WebimageBank from "./Images/WebimageBank";
 
 
 
function App() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <div className="App">
            <WebimageBank />
            {            
                currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
            }
            <Webimage />
        </div>
    );
}

export default App