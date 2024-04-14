import { LOGO_URL } from "../utils/constants";
export const Header = () => {
    
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = {LOGO_URL} alt="logoimage"/>
            </div>

            <div className="nav-items">

                <ul>
                    <li>Name</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>cart</li>
                </ul>

            </div>
        </div>
    )
};

