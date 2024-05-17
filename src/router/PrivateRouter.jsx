import { Navigate, useLocation } from "react-router-dom";
import { useAuthorizationStore } from "../store/auth/authstore";

export const PrivateRoute = ({ children }) => {
  const state = useAuthorizationStore();
  console.log(state);

  return state.loginStatus !== "unAuthorized" ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};
