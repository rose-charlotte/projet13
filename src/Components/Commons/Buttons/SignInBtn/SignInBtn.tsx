import { Link } from "react-router-dom";
import style from "./SignInBtn.module.scss";

export function SignInBtn() {
    return (
        <Link to="/user" className={style.signinBtn}>
            Sign In
        </Link>
    );
}
