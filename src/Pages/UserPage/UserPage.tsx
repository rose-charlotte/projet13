import { useDispatch, useSelector } from "react-redux";
import { Account } from "../../Components/Account/Account";
import { UserHeader } from "../../Components/UserHeader/UserHeader";
import style from "./UserPage.module.scss";
import { selectToken, setUser } from "../../store/slices/userSlice";

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
            <Account />
        </main>
    );
}
