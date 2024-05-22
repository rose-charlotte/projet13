import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { SignIn } from "./Pages/SignIn/SignIn";
import { Layout } from "./Pages/Layout/Layout";
import { UserPage } from "./Pages/UserPage/UserPage";
import { Page404 } from "./Pages/Page404/Page404";
import { PrivateRoute } from "./Components/PrivateRoute/privateRoute";

import { TransactionsPage } from "./Pages/TransactionsPage/TransactionPage";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<Navigate to="/page404" />}>
            <Route index element={<Home />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/profile" element={<PrivateRoute />}>
                <Route index element={<UserPage />} />
                <Route path=":bankAccountId/transactions" element={<TransactionsPage />} />
            </Route>
            <Route path="*" element={<Page404 />} />
        </Route>
    )
);
