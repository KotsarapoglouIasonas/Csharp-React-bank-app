import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from "axios";
import pic from ".././Images/Bank.png";

function DepositOwn() {
    const [ammount, setAmmount] = useState(0);
    const [description, setDescription] = useState('');
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        fetch('https://localhost:7195/account')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAccounts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
  

    const { state } = useLocation();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/Deposit", { state: state });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleDeposit = () => {
        accounts.map(account => {
            if (account.userId === state.id) {
                const account_data = {
                    id: account.id,
                    balance: parseInt(ammount) + parseInt(account.balance)
                }
                const requestOptions = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(account_data)
                };
                fetch('https://localhost:7195/account', requestOptions);
            }
            if (account.userId === state.id) {
                const transaction = {
                    name: state.name,
                    description: description,
                    ammount: parseInt(ammount),
                    type: "A Deposit was made on: " + new Date().toString() + ", New Balance: " + (parseInt(ammount) + parseInt(account.balance)),
                    accountId: account.id
                }
                console.log(transaction);
                const url = 'https://localhost:7195/transaction'
                axios.post(url, transaction).then(res => {
                    console.log(res);
                }) 
            }
        })
        setAmmount(0);
        setDescription('');
    }

    return (
        <div className="DepositOwn">
            <img src={pic} className="LogoPages" />
            <div className="Column">
                <header className="TextTop">Deposit to your Account</header>
                <div className="DepositContainer">
                    <div className= "DepositOwnBox">
                        <form onSubmit={handleSubmit}>
                            <p>Ammount to Deposit</p>
                            <input className="DepositInput" value={ammount} onChange={(e) => setAmmount(e.target.value)} placeholder="0" name="ammount" />
                            <p>Description</p>
                            <input className="DepositInput"  value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" name="Description" /><br></br>
                            <button className="btn5" type="submit" onClick={() => handleDeposit()}>Deposit</button>
                         </form>
                        <br></br>
                        <button className="btnLogout" type="submit" onClick={() => handleBack()}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DepositOwn