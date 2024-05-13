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
        setToken: (state, action) => {
            state.token = action.payload;
        },

        deleteToken: state => {
            state.token = initialState.token;
            return state;
        },

        setUser: (state, action) => {
            state.user = action.payload;
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

export const { setToken, deleteToken, setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
