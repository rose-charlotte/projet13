import { useSelector } from "react-redux";
import style from "./UserHeader.module.scss";
import { selectUser } from "../../store/slices/userSlice";
import { FormInput } from "../Commons/FormInput/FormInput";
import { CommonBtn } from "../Commons/Buttons/commonBtn/CommonBtn";
import { FormEvent, useState } from "react";
import { useUpdateProfileMutation } from "../../Data/fetchApi/api";

export function UserHeader() {
    const [edit, setEdit] = useState(false);
    const user = useSelector(selectUser);

    const [updateProfile, { isLoading, isError, reset }] = useUpdateProfileMutation();

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);
        const firstName = data.get("firstName")?.toString();
        const lastName = data.get("lastName")?.toString();

        if (!firstName || !lastName) {
            return;
        }

        if (firstName === user?.firstName && lastName === user?.lastName) {
            setEdit(false);
            return;
        }

        updateProfile({ firstName, lastName }).then(result => {
            if (!("error" in result)) {
                setEdit(false);
            }
        });
    };

    console.log(user);
    return (
        <header className={style.header}>
            {isLoading && <span>Loading...</span>}
            <h1 className={style.title}>
                Welcome back
                {!edit && <span>{`${user?.firstName} ${user?.lastName} !`}</span>}
            </h1>
            {user && edit && (
                <form onSubmit={onSubmit} className={style.profil}>
                    <FormInput name="firstName" required={false} defaultValue={user.firstName} />
                    <FormInput name="lastName" required={false} defaultValue={user.lastName} />
                    <CommonBtn title="Save" />
                    <CommonBtn title="Cancel" onClick={() => setEdit(false)} />

                    {isError && <span className={style.errorMsg}>Oups! Something went wrong, please try again</span>}
                </form>
            )}

            {!edit && (
                <CommonBtn
                    title="Edit Name"
                    onClick={() => {
                        reset();
                        setEdit(true);
                    }}
                />
            )}
        </header>
    );
}
