import style from "./Account.module.scss";

export function Account(props: AccountProps) {
    return (
        <section className={style.account}>
            <div className={style.accountContentWrapper}>
                <h1 className={style.accountTitle}>{props.title}</h1>
                <p className={style.accountAmount}>{props.amount}</p>
                <p className={style.accountAmountDescription}>{props.description}</p>
            </div>
            <div className={style.accountContentWrapperCta}>
                <button className={style.transactionBtn}>View transaction</button>
            </div>
        </section>
    );
}

export interface AccountProps {
    title: string;
    amount: string;
    description: string;
}
