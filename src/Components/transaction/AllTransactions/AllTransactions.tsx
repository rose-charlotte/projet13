import { useGetAllTransactionsQuery } from "../../../Data/fetchApi/bankAccountApi";
import { TransactionItem } from "../transactionItem/TransactionItem";
import { useParams } from "react-router-dom";
import style from "./AllTransaction.module.scss";

export function AllTransactions() {
    const { bankAccountId } = useParams();
    console.log(bankAccountId);
    const { data: transactionData } = useGetAllTransactionsQuery(bankAccountId!);
    console.log(transactionData);
    return (
        <div className={style.TransactionsContainer}>
            {transactionData &&
                transactionData.map(transaction => <TransactionItem transaction={transaction} key={transaction._id} />)}
        </div>
    );
}
