import argentBankLogo from "/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import { faSignOutAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteToken, deleteUser, selectUser } from "../../store/slices/userSlice";
import { userApi } from "../../Data/fetchApi/userApi";
import { bankAccountApi } from "../../Data/fetchApi/bankAccountApi";

export function Header() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const onDeconnexion = () => {
        dispatch(deleteToken());
        dispatch(deleteUser());
        dispatch(userApi.util.resetApiState());
        dispatch(bankAccountApi.util.resetApiState());
    };

    return (
        <>
            {!user && (
                <nav className={style.mainNav}>
                    <Link className={style.mainNavLogo} to="/">
                        <img className={style.mainNavLogoImg} src={argentBankLogo} alt="logo argent bank" />
                    </Link>
                    <Link className={style.mainNavItem} to="/signIn">
                        <FontAwesomeIcon icon={faUserCircle} />
                        <span>Sign In</span>
                    </Link>
                </nav>
            )}
            {user && (
                <nav className={style.mainNav}>
                    <Link className={style.mainNavLogo} to="/">
                        <img className={style.mainNavLogoImg} src={argentBankLogo} alt="logo argent bank" />
                    </Link>
                    <div>
                        <Link to="/profile" className={style.mainNavItem}>
                            <FontAwesomeIcon icon={faUserCircle} />
                            {user.firstName}{" "}
                        </Link>
                        <Link className={style.mainNavItem} to="/" onClick={onDeconnexion}>
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            <span>Sign Out</span>
                        </Link>
                    </div>
                </nav>
            )}
        </>
    );
}
