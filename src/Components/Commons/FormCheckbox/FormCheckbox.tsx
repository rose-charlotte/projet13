import style from "./FormCheckbox.module.scss";

export function FormCheckbox() {
    return (
        <div className={style.inputRemember}>
            <input type="checkbox" id="rememberMe" />
            <label className={style.inputRememberLabel} htmlFor="rememberMe">
                Remember me
            </label>
        </div>
    );
}
