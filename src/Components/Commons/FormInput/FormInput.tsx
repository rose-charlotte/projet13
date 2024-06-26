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
                    type={props.type}
                    defaultValue={props.defaultValue}
                ></input>
            </label>
        </div>
    );
}

interface FormItemProps {
    label?: string;
    type: string;
    name: string | undefined;
    required: boolean;
    defaultValue?: string | undefined;
}
