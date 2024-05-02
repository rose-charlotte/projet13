import style from "./Account.module.scss";

export function Account() {
    return (
        <section className={style.account}>
            <div className={style.accountContentWrapper}>
                <h1 className={style.accountTitle}>Argent Bank Checking (x8349)</h1>
                <p className={style.accountAmount}>$2,082.79</p>
                <p className={style.accountAmountDescription}>Available Balance</p>
            </div>
            <div className={style.accountContentWrapperCta}>
                <button className={style.transactionBtn}>View transaction</button>
            </div>
        </section>
    );
}
