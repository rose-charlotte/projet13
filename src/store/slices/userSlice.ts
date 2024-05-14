import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../Data/fetchApi/api";

const initialState: UserState = {
    token: undefined,
    user: undefined,
};

export const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        deleteToken: state => {
            state.token = initialState.token;
            return state;
        },

        deleteUser: state => {
            state.user = initialState.user;
            return state;
        },
    },

    extraReducers: builder => {
        builder.addMatcher(userApi.endpoints.updateProfile.matchFulfilled, (state, { payload }) => {
            state.user!.firstName = payload.body.firstName;
            state.user!.lastName = payload.body.lastName;
        });

        builder.addMatcher(userApi.endpoints.profile.matchFulfilled, (state, { payload }) => {
            state.user = payload.body;
        });

        builder.addMatcher(userApi.endpoints.token.matchFulfilled, (state, { payload }) => {
            state.token = payload.body.token;
        });
    },
    selectors: {
        selectToken: state => state.token,
        selectUser: state => state.user,
    },
});

export interface UserState {
    token: string | undefined;
    user: User | undefined;
}

export interface User {
    email: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
}

export const { selectToken, selectUser } = userSlice.selectors;

export const { deleteToken, deleteUser } = userSlice.actions;

export default userSlice.reducer;
