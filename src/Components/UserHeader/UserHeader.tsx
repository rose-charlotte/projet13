import { useSelector } from "react-redux";
import style from "./UserHeader.module.scss";
import { selectUser } from "../../store/slices/userSlice";
import { FormInput } from "../Commons/FormInput/FormInput";
import { CommonBtn } from "../Commons/Buttons/commonBtn/CommonBtn";
import { FormEvent, useState } from "react";
import { useUpdateProfileMutation } from "../../Data/fetchApi/userApi";

export function UserHeader() {
    const [edit, setEdit] = useState(false);
    const user = useSelector(selectUser);

    const [updateProfile, { isLoading, isError, reset }] = useUpdateProfileMutation();

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const data = new FormData(e.target as HTMLFormElement);
        const firstName = data.get("firstName")?.toString();
        const lastName = data.get("lastName")?.toString();

        // Vérifie que les champs sont renseignés
        if (!firstName || !lastName) {
            return;
        }

        //S'il n'y a aucune modification dans les informations alors la requête n'est pas envoyées
        if (firstName === user?.firstName && lastName === user?.lastName) {
            setEdit(false);
            return;
        }

        //Envoies les modifications du profil via l'API
        updateProfile({ firstName, lastName }).then(result => {
            if (!("error" in result)) {
                setEdit(false);
            }
        });
    };

    return (
        <header className={style.header}>
            {isLoading && <span>Loading...</span>}
            <h1 className={style.title}>
                Welcome back
                {!edit && <span>{`${user?.firstName} ${user?.lastName} !`}</span>}
            </h1>
            {user && edit && (
                <form onSubmit={onSubmit} className={style.profil}>
                    <FormInput name="firstName" type="text" required={false} defaultValue={user.firstName} />
                    <FormInput name="lastName" type="text" required={false} defaultValue={user.lastName} />
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
