import { useGetAllTransactionsQuery } from "../../../Data/fetchApi/bankAccountApi";
import { TransactionItem } from "../transactionItem/TransactionItem";
import { useParams } from "react-router-dom";

export function AllTransactions() {
    const { bankAccountId } = useParams();
    console.log(bankAccountId);
    const { data: transactionData } = useGetAllTransactionsQuery(bankAccountId!);
    console.log(transactionData);
    return (
        <div>
            {transactionData &&
                transactionData.map(transaction => (
                    <TransactionItem
                        date={transaction.date}
                        description={transaction.description}
                        currency={transaction.currency}
                        amount={transaction.amount}
                    />
                ))}
        </div>
    );
}
