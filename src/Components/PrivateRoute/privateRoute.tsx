import { useSelector } from "react-redux";
import { selectToken } from "../../store/slices/userSlice";
import { Navigate, Outlet } from "react-router-dom";

//Empeche l'utilisateur d'accéder à certaines routes s'il n'est pas connecté
export const PrivateRoute = () => {
    const token = useSelector(selectToken);
    return token ? <Outlet /> : <Navigate to="/signIn" />;
};
