import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./SignIn.module.scss";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FormInput } from "../../Components/Commons/FormInput/FormInput.tsx";
import { FormCheckbox } from "../../Components/Commons/FormCheckbox/FormCheckbox.tsx";
import { SignInBtn } from "../../Components/Commons/Buttons/SignInBtn/SignInBtn.tsx";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/slices/userSlice.ts";
import { useTokenMutation } from "../../Data/fetchApi/api.ts";

import { FormEvent, useEffect } from "react";

export function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { data, isLoading }] = useTokenMutation();

    useEffect(() => {
        if (!data) {
            return;
        }

        dispatch(setToken(data.body.token));
        navigate("/profile");
    }, [data, dispatch, navigate]);

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
            {isLoading && <p>Loading...</p>}

            <section className={style.signInContent}>
                <FontAwesomeIcon icon={faUserCircle} className={style.icone} />
                <h1>Sign In</h1>
                <form onSubmit={onSubmit}>
                    <FormInput label="Username" name="username" required />
                    <FormInput label="Password" name="password" required />
                    <FormCheckbox />
                    <SignInBtn />
                </form>
            </section>
        </main>
    );
}
