import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./SignIn.module.scss";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FormInput } from "../../Components/Commons/FormInput/FormInput.tsx";
import { FormCheckbox } from "../../Components/Commons/FormCheckbox/FormCheckbox.tsx";
import { SignInBtn } from "../../Components/Commons/Buttons/SignInBtn/SignInBtn.tsx";

export function SignIn() {
    return (
        <main className={style.main}>
            <section className={style.signInContent}>
                <FontAwesomeIcon icon={faUserCircle} className={style.icone} />
                <h1>Sign In</h1>
                <form>
                    <FormInput name="Username" />
                    <FormInput name="Password" />
                    <FormCheckbox />
                    <SignInBtn />
                </form>
            </section>
        </main>
    );
}
