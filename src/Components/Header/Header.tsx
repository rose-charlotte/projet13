import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import argentBankLogo from "/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";

export function Header() {
    return (
        <nav className={style.mainNav}>
            <Link className={style.mainNavLogo} to="/">
                <img className={style.mainNavLogoImg} src={argentBankLogo} alt="logo argent bank" />
            </Link>
            <Link className={style.mainNavItem} to="/signIn">
                <FontAwesomeIcon icon={faUserCircle} />
                <span>Sign In</span>
            </Link>
        </nav>
    );
}
