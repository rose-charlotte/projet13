import { Account } from "../../Components/Account/Account";
import { UserHeader } from "../../Components/UserHeader/UserHeader";
import style from "./UserPage.module.scss";
import { useProfileMutation } from "../../Data/fetchApi/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";

const bankAccounts = [
    {
        title: "Argent Bank Checking (x8349)",
        amount: "$2,082.79",
        description: "Available Balance",
    },
    {
        title: "Argent Bank Savings (x6712)",
        amount: "$10,928.42",
        description: "Available Balance",
    },
    {
        title: "Argent Bank Credit Card (x8349)",
        amount: "$184.30",
        description: "Current Balance",
    },
];

export function UserPage() {
    const [profile, { data, isError, isLoading }] = useProfileMutation();

    const user = useSelector(selectUser);

    const navigate = useNavigate();

    useEffect(() => {
        // Si l'appel API est en cours alors on attends
        if (isLoading) {
            return;
        }

        // Si je n'ai ni données ni erreur alors j'appelle l'API
        if (!data && !isError) {
            profile();
            return;
        }

        // Dans ce cas je n'ai pas pu récupérer les données de l'utilisateur et je le redirige vers la page SignIn
        if (isError) {
            navigate("/signIn", {
                state: {
                    error: "Utilisateur non trouvé",
                },
            });
        }
        [user, navigate];
    });

    return (
        <>
            {user ? (
                <main className={style.main}>
                    <UserHeader />
                    <h2 className={style.srOnly}>Accounts</h2>
                    {bankAccounts.map((account, index) => (
                        <Account
                            title={account.title}
                            amount={account.amount}
                            description={account.description}
                            key={`Account-${index}`}
                        />
                    ))}
                </main>
            ) : null}
        </>
    );
}
