import { useDispatch, useSelector } from "react-redux";
import { Account } from "../../Components/Account/Account";
import { UserHeader } from "../../Components/UserHeader/UserHeader";
import style from "./UserPage.module.scss";
import { selectToken, setUser } from "../../store/slices/userSlice";

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

    const token = useSelector(selectToken);

    async function getUserInfo() {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: { "Content-Type": "application/json", authorization: `Bearer ${token}` },
        });

        if (response.ok) {
            const user = await response.json();
            dispatch(setUser(user.body));
        }
    }
    getUserInfo();
    return (
        <main className={style.main}>
            <UserHeader />
            <h2 className={style.srOnly}>Accounts</h2>
            {bankAccounts.map(account => (
                <Account title={account.title} amount={account.amount} description={account.description} />
            ))}
        </main>
    );
}
