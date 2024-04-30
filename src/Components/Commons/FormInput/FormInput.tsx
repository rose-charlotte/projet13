import style from "./FormInput.module.scss";

export function FormInput(props: FormItemProps) {
    return (
        <div className={style.inputWrapper}>
            <label className={style.label}>
                {props.name}
                <input className={style.input} type="text"></input>
            </label>
        </div>
    );
}

interface FormItemProps {
    name: string;
}
