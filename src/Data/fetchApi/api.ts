import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectToken } from "../../store/slices/userSlice";
import { RootState } from "../../store/store";

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    body: {
        token: string;
    };
}

export interface ProfileResponse {
    body: {
        email: string;
        firstName: string;
        lastName: string;
    };
    message: string;
}

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/api/v1/user/",
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
        token: builder.mutation<LoginResponse, LoginRequest>({
            query: data => ({
                url: "login",
                method: "POST",
                body: data,
            }),
        }),
        profile: builder.mutation<ProfileResponse, void>({
            query: () => ({
                url: "profile",
                method: "POST",
            }),
        }),
    }),
});

export const { useTokenMutation, useProfileMutation } = userApi;
