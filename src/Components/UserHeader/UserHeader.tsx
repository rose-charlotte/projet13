import style from "./UserHeader.module.scss";

export function UserHeader() {
    return (
        <header className={style.header}>
            <h1>
                Welcome back <br /> Tony Jarvis
            </h1>
            <button className={style.editBtn}>Edit Name </button>
        </header>
    );
}
