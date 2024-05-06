import style from "./FormInput.module.scss";

export function FormInput(props: FormItemProps) {
    return (
        <div className={style.inputWrapper}>
            <label className={style.label}>
                {props.label}
                <input
                    name={props.name}
                    required={props.required}
                    className={style.input}
                    type="text"
                    placeholder={props.placeholder}
                ></input>
            </label>
        </div>
    );
}

interface FormItemProps {
    label?: string;
    name: string | undefined;
    required: boolean;
    placeholder?: string | undefined;
}
