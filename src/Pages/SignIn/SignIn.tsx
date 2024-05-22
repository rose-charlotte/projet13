import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./SignIn.module.scss";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FormInput } from "../../Components/Commons/FormInput/FormInput.tsx";
import { FormCheckbox } from "../../Components/Commons/FormCheckbox/FormCheckbox.tsx";
import { SignInBtn } from "../../Components/Commons/Buttons/SignInBtn/SignInBtn.tsx";
import { useLocation, useNavigate } from "react-router-dom";

import { useTokenMutation } from "../../Data/fetchApi/userApi.ts";

import { FormEvent, useEffect } from "react";

export function SignIn() {
    const navigate = useNavigate();

    const location = useLocation();

    const [login, { data, isError }] = useTokenMutation();
    console.log(data);
    useEffect(() => {
        if (!data) {
            return;
        }

        navigate("/profile");
    }, [data, navigate]);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);
        const email = data.get("username")?.toString();
        const password = data.get("password")?.toString();

        if (!email || !password) {
            return;
        }

        login({ email, password });
    };

    return (
        <main className={style.main}>
            {location.state?.error && <span className={style.errorMsg}>{location.state.error}</span>}
            {isError && <span className={style.errorMsg}>Utilisateur ou mot de passe invalide</span>}
            <section className={style.signInContent}>
                <FontAwesomeIcon icon={faUserCircle} className={style.icone} />
                <h1>Sign In</h1>
                <form onSubmit={onSubmit}>
                    <FormInput type="text" label="Username" name="username" required />
                    <FormInput type="password" label="Password" name="password" required />
                    <FormCheckbox />
                    <SignInBtn />
                </form>
            </section>
        </main>
    );
}
