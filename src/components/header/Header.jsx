import "./header.scss";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../asset/crown.svg";

const Header = () =>{
    return(
        <div className="header">
            <Link to="/" className="logo-container">
            <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                <Link className="option" to="/signin">SIGN IN</Link>
            </div>
        </div>
    )

}

export default Header;

