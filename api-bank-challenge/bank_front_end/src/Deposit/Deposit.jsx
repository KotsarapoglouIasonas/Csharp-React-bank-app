import { useNavigate, useLocation } from 'react-router-dom';


function Deposit() {

    const { state } = useLocation();
    const navigate = useNavigate();

    const handleDepositOwn = () => {
        navigate("/DepositOwn", { state: state });
    }
    const handleDepositSomeone = () => {
        navigate("/DepositSomeone", { state: state });
    }
    const handleBack = () => {
        navigate("/Menu", { state: state });
    }


    return (
        <div className="Deposit">
            <header>Deposit Options</header>
            <div className="DepositContainer">
                <div className="DepositBox">
                    <p>Deposit on your own account:</p>
                    <button className="btn4" type="submit" onClick={() => handleDepositOwn()}>Deposit</button>
                </div>
                <div className="DepositBox">
                    <p>Deposit on someones else account:</p>
                    <button className="btn3" type="submit" onClick={() => handleDepositSomeone()}>Deposit</button>
                </div>
                <button className="btnLogout" type="submit" onClick={() => handleBack()}>Back</button>
            </div>
        </div>
    )
}
export default Deposit