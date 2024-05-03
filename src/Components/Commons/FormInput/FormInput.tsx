import style from "./FormInput.module.scss";

export function FormInput(props: FormItemProps) {
    return (
        <div className={style.inputWrapper}>
            <label className={style.label}>
                {props.label}
                <input name={props.name} className={style.input} type="text"></input>
            </label>
        </div>
    );
}

interface FormItemProps {
    label: string;
    name: string;
}
