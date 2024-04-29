import style from "./FeatureItem.module.scss";

export function FeatureItem(props: FeatureItemProps) {
    return (
        <div className={style.feature}>
            <img className={style.icon} src={props.src} alt="logo" />
            <h1 className={style.title}>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    );
}

export interface FeatureItemProps {
    src: string;
    title: string;
    text: string;
}
