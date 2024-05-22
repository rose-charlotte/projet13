import style from "./TransactionItem.module.scss";

export function TransactionItem(props: TransactionProps) {
    return (
        <div className={style.transactionContainer}>
            <p>{props.date}</p>
            <p>{props.description}</p>
            <p>
                {props.currency}
                {props.amount}
            </p>

            <p>balance : 2000</p>
        </div>
    );
}

export interface TransactionProps {
    date: string;
    description: string;
    currency: string;
    amount: number;
}
