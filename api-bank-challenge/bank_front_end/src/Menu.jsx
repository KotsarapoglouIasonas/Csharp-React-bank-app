import { useNavigate, useLocation } from 'react-router-dom';
import './App.css';

function Menu() {
    const { state } = useLocation();
    const navigate = useNavigate();
    

    if (state === {}) {
        navigate("/");
    }
    const name = state.name;

    const handleDeposit = () => {
        navigate("/Deposit", { state: state});
    }

    const handleWithdraw = () => {
        navigate("/Withdraw", { state: state });
    }
    const handleBankStatement = () => {
        navigate("/Transaction", { state: state });
    }
    const handleBack = () => {
        navigate("/");
    }

    return (
        <div className="Menu">
            <header>Welcome {state.name} </header>
            <div className="MenuContainer">
                <div className="MenuBox">
                    <p>Deposit:  </p>
                    <button class="btn1" type="button" onClick={() => handleDeposit()}>Deposit</button>            
                </div>
                <div className="MenuBox">
                    <p>Withdraw:  </p>
                    <button class="btn2" type="button" onClick={() => handleWithdraw()}>Withdraw</button>
                </div>
                <div className="MenuBox">
                    <p>Bank Statement:</p>
                    <button class="btn3" type="button" onClick={() => handleBankStatement()}>Transactions</button>
                </div>
                <button class="btnLogout" onClick={() => handleBack()}>Logout</button>
            </div>
        </div>

    )
}
export default Menu