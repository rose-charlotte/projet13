import style from "./SignInBtn.module.scss";

export function SignInBtn() {
    return (
        <button type="submit" className={style.signinBtn}>
            Sign In
        </button>
    );
}
