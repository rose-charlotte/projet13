import { Account } from "../../Components/Account/Account";
import { UserHeader } from "../../Components/UserHeader/UserHeader";
import style from "./UserPage.module.scss";

export function UserPage() {
    return (
        <main className={style.main}>
            <UserHeader />
            <h2 className={style.srOnly}>Accounts</h2>
            <Account />
        </main>
    );
}
