import style from "./CommonBtn.module.scss";

export function CommonBtn(props: CommonBtnProps) {
    return (
        <button className={style.btn} onClick={props.onClick}>
            {props.title}
        </button>
    );
}

export interface CommonBtnProps {
    title: string;
    onClick: () => void;
}
