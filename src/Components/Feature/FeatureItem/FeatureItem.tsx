import style from "./FeatureItem.module.scss";

export function FeatureItem() {
    return (
        <div className={style.feature}>
            <img className={style.icon} src="icon-chat.png" alt="logo" />
            <h1 className={style.title}>You are our #1 priority</h1>
            <p>
                Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in
                less than 5 minutes.
            </p>
        </div>
    );
}
