import { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.js";
import Menu from "./Menu";
import Deposit from "./Deposit/Deposit";
import DepositOwn from "./Deposit/DepositOwn";
import DepositSomeone from "./Deposit/DepositSomeone";
import Withdraw from "./Withdraw/Withdraw";
import Transaction from "./Transaction/Transaction";
import Forgot from "./Forgot";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/Menu',
        element: <Menu/>
    },
    {
        path: '/Deposit',
        element: <Deposit/>
    },
    {
        path: '/DepositOwn',
        element: <DepositOwn />
    },
    {
        path: '/DepositSomeone',
        element: <DepositSomeone />
    },
    {
        path: '/Withdraw',
        element: <Withdraw/>
    },
    {
        path: '/Transaction',
        element: <Transaction />
    },
    {
        path: '/Forgot',
        element: <Forgot />
    }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <StrictMode>
        <RouterProvider router={router} />
        </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

