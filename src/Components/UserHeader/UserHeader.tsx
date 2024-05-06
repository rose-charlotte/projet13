import { useSelector } from "react-redux";
import style from "./UserHeader.module.scss";
import { selectUser } from "../../store/slices/userSlice";

export function UserHeader() {
    const user = useSelector(selectUser);

    return (
        <header className={style.header}>
            <h1>
                Welcome back <br /> {`${user?.firstName} ${user?.lastName} !`}
            </h1>
            <button className={style.editBtn}>Edit Name </button>
        </header>
    );
}
