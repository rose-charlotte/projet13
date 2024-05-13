import { useDispatch, useSelector } from "react-redux";
import style from "./UserHeader.module.scss";
import { selectUser, setUser } from "../../store/slices/userSlice";
import { FormInput } from "../Commons/FormInput/FormInput";
import { CommonBtn } from "../Commons/Buttons/commonBtn/CommonBtn";
import { FormEvent, useEffect, useState } from "react";
import { useUpdateProfileMutation } from "../../Data/fetchApi/api";

export function UserHeader() {
    const dispatch = useDispatch();

    const [edit, setEdit] = useState(false);
    const user = useSelector(selectUser);

    const [updateProfile, { data }] = useUpdateProfileMutation();

    useEffect(() => {
        if (!data) {
            return;
        }

        dispatch(setUser(data.body));
    }, [data, dispatch]);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);
        const firstName = data.get("firstName")?.toString();
        const lastName = data.get("lastName")?.toString();
        console.log("firstName", firstName, "lastName", lastName);

        if (!firstName || !lastName) {
            return;
        }

        updateProfile({ firstName, lastName });

        setEdit(false);
    };

    console.log(user);
    return (
        <header className={style.header}>
            <h1 className={style.title}>
                Welcome back
                {!edit && <span>{`${user?.firstName} ${user?.lastName} !`}</span>}
            </h1>
            {user && edit && (
                <form onSubmit={onSubmit} className={style.profil}>
                    <FormInput name="firstName" required={false} placeholder={user.firstName} />
                    <FormInput name="lastName" required={false} placeholder={user.lastName} />
                    <CommonBtn title="Save" />
                    <CommonBtn title="Cancel" onClick={() => setEdit(false)} />
                </form>
            )}

            {!edit && <CommonBtn title="Edit Name" onClick={() => setEdit(true)} />}
        </header>
    );
}
