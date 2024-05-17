import { Navigate } from "react-router-dom";
import { useAuthorizationStore } from "../store/auth/authstore";

export const PublicRoute = ({ children }) => {
  const state = useAuthorizationStore();
  console.log(state);

  return state.loginStatus === "unAuthorized" ? (
    children
  ) : (
    <Navigate to="/home" />
  );
};
