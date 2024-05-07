import { useDispatch } from "react-redux";
import { Account } from "../../Components/Account/Account";
import { UserHeader } from "../../Components/UserHeader/UserHeader";
import style from "./UserPage.module.scss";
import { setUser } from "../../store/slices/userSlice";
import { useProfileMutation } from "../../Data/fetchApi/api";
import { useEffect } from "react";

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
    const dispatch = useDispatch();
    const [profile, { data }] = useProfileMutation();
    //const [profile, { data, isError, isLoading }] = useProfileMutation();
    console.log(data?.body.firstName);

    useEffect(() => {
        if (!data) {
            profile();
        }
        dispatch(setUser(data?.body));
    }, [data, dispatch, profile]);

    return (
        <main className={style.main}>
            <button onClick={() => profile()}>test</button>
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
    );
}
