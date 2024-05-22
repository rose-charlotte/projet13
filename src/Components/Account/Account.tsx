import { Link } from "react-router-dom";
import style from "./Account.module.scss";

export function Account(props: AccountProps) {
    const bankAccountId = props.bankAccountId;
    return (
        <section className={style.account}>
            <div className={style.accountContentWrapper}>
                <h1 className={style.accountTitle}>
                    Argent BanK {props.type} {props.accountId}
                </h1>
                <p className={style.accountAmount}>{props.currency}</p>
                <p className={style.accountAmountDescription}>{props.balanceType}</p>
            </div>
            <div className={style.accountContentWrapperCta}>
                <button className={style.transactionBtn}>
                    <Link className={style.link} to={"/profile/" + bankAccountId + "/transactions"}>
                        View transactions
                    </Link>
                </button>
            </div>
        </section>
    );
}

export interface AccountProps {
    type: string;
    accountId: string;
    currency: string;
    balanceType: string;
    bankAccountId: string;
}
