import { useSelector } from "react-redux";
import style from "./UserHeader.module.scss";
import { selectUser } from "../../store/slices/userSlice";
import { FormInput } from "../Commons/FormInput/FormInput";
import { CommonBtn } from "../Commons/Buttons/commonBtn/CommonBtn";
import { useState } from "react";

export function UserHeader() {
    const [edit, setEdit] = useState(false);
    const user = useSelector(selectUser);

    return (
        <header className={style.header}>
            <h1 className={style.title}>
                Welcome back
                {!edit && <span>{`${user?.firstName} ${user?.lastName} !`}</span>}
            </h1>
            {user && edit && (
                <div className={style.profil}>
                    <FormInput name={user.firstName} required={false} placeholder={user.firstName} />
                    <FormInput name={user.lastName} required={false} placeholder={user.lastName} />
                    <CommonBtn title="Save" onClick={() => console.log("save")} />
                    <CommonBtn title="Cancel" onClick={() => setEdit(false)} />
                </div>
            )}

            {!edit && <CommonBtn title="Edit Name" onClick={() => setEdit(true)} />}
        </header>
    );
}
