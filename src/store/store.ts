import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { userApi } from "../Data/fetchApi/userApi";

import { bankAccountApi } from "../Data/fetchApi/bankAccountApi";

export const store = configureStore({
    reducer: {
        user: userSlice,

        [userApi.reducerPath]: userApi.reducer,
        [bankAccountApi.reducerPath]: bankAccountApi.reducer,
    },

    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([userApi.middleware, bankAccountApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
