import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectToken } from "../../store/slices/userSlice";
import { RootState } from "../../store/store";

export interface BankAccountResponse extends Array<BankAccount> {}

export interface BankAccount {
    type: string;
    accountId: string;
    currency: string;
    userId: string;
    balanceType: string;
    _id: string;
}

export interface TransactionsResponse extends Array<Transactions> {}

export interface Transactions {
    date: string;
    description: string;
    currency: string;
    amount: number;
}

export const bankAccountApi = createApi({
    reducerPath: "bankAccountApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/api/v1/bankAccounts",
        prepareHeaders: (headers, { getState }) => {
            headers.set("Content-Type", "application/json");

            const token = selectToken(getState() as RootState);
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }

            return headers;
        },
    }),
    endpoints: builder => ({
        getBankAccount: builder.query<BankAccountResponse, void>({
            query: () => ({ url: "/", method: "GET" }),
        }),
        getAllTransactions: builder.query<TransactionsResponse, string>({
            query: (bankAccountId: string) => ({ url: `/${bankAccountId}/transactions`, method: "GET" }),
        }),
    }),
});

export const { useGetBankAccountQuery, useGetAllTransactionsQuery } = bankAccountApi;
