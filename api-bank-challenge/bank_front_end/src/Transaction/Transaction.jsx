import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from "react";


function Transaction() {
    const [transactions, setTransactions] = useState([]);
    const [accounts, setAccounts] = useState([]);

    const { state } = useLocation();
    const navigate = useNavigate();

   

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

    useEffect(() => {
        fetch('https://localhost:7195/transaction')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTransactions(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const handleBack = () => {
        navigate("/Menu", { state: state });
    }

    let account;
    accounts.map(item => {
        if (item.userId === state.id) {
        account = item;
        }
    })





    return (
        <div className="Transaction" >
            <header>Transaction List</header>
            <div className="DepositContainer">
                <div className="List">
                    <ul>
                    {
                        transactions.map(item => {
                            if (account !== undefined) {
                                if (item.accountId === account.id) {
                                    return (<li>
                                        <header>Transaction Details:</header>
                                        <p>Name: {item.name}</p>
                                        <p>Description: {item.description}</p>
                                        <p>Ammount: {item.ammount}</p>
                                        <p>Info: {item.type}</p>
                                    </li>)
                                }
                            }
                        })
                    }
                    </ul>
                </div>
                <button className="btnLogoutTransaction" type="submit" onClick={() => handleBack()}>Back</button>
            </div>
        </div>
    )
}
export default Transaction