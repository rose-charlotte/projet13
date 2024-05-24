import { Account } from "../../Components/Account/Account";
import { UserHeader } from "../../Components/UserHeader/UserHeader";
import style from "./UserPage.module.scss";
import { useProfileMutation } from "../../Data/fetchApi/userApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";
import { useGetBankAccountQuery } from "../../Data/fetchApi/bankAccountApi";

export function UserPage() {
    const { data: bankAccountData } = useGetBankAccountQuery();

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
    }, [user, navigate, isLoading, data, isError, profile]);

    return (
        <>
            {user ? (
                <main className={style.main}>
                    <UserHeader />
                    <h2 className={style.srOnly}>Accounts</h2>

                    {bankAccountData &&
                        bankAccountData.map((account, index) => (
                            <Account
                                bankAccountId={account._id}
                                type={account.type}
                                accountId={account.accountId}
                                currency={`${account.currency} 2,082.79 `}
                                balanceType={account.balanceType}
                                key={`Account-${index}`}
                            />
                        ))}
                </main>
            ) : null}
        </>
    );
}
