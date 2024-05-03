import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./SignIn.module.scss";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FormInput } from "../../Components/Commons/FormInput/FormInput.tsx";
import { FormCheckbox } from "../../Components/Commons/FormCheckbox/FormCheckbox.tsx";
import { SignInBtn } from "../../Components/Commons/Buttons/SignInBtn/SignInBtn.tsx";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export function SignIn() {
    const navigate = useNavigate();

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);
        const username = data.get("username");
        const password = data.get("password");

        console.log(username, password);

        navigate("/user");
    };

    return (
        <main className={style.main}>
            <section className={style.signInContent}>
                <FontAwesomeIcon icon={faUserCircle} className={style.icone} />
                <h1>Sign In</h1>
                <form onSubmit={onSubmit}>
                    <FormInput label="Username" name="username" />
                    <FormInput label="Password" name="password" />
                    <FormCheckbox />
                    <SignInBtn />
                </form>
            </section>
        </main>
    );
}
