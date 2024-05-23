import { useState } from "react";
import style from "./TransactionItem.module.scss";
import { Transaction, useGetTransactionByIdQuery } from "../../../Data/fetchApi/bankAccountApi";
import { useParams } from "react-router-dom";
import { assertDefined } from "../../../utils/StrictUtils";

export function TransactionItem(props: TransactionProps) {
    const { bankAccountId } = useParams();
    assertDefined(bankAccountId);

    const { transaction } = props;

    const [skip, setSkip] = useState(true);
    const { data: transactionDetailsData } = useGetTransactionByIdQuery(
        { bankAccountId, transactionId: transaction._id },
        {
            skip,
        }
    );
    const [edit, setEdit] = useState(false);

    console.log(transactionDetailsData);

    const handleTransactionDetail = () => {
        setEdit(!edit);
        setSkip(false);
    };

    return (
        <>
            <div className={style.transactionContainer} onClick={() => handleTransactionDetail()}>
                <p>{transaction.date}</p>
                <p>{transaction.description}</p>
                <div>
                    {transaction.currency}
                    {transaction.amount}
                </div>
                <p>balance : 2000</p>
            </div>

            {edit && <div>ici</div>}
        </>
    );
}

export interface TransactionProps {
    transaction: Transaction;
}
