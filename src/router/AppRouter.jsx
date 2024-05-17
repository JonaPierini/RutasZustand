import { Route, Routes } from "react-router-dom";
import { PublicRoute } from "./PublicRouter";
import { PrivateRoute } from "./PrivateRouter";
import { Login } from "../components/login/Login";
import { useAuthorizationStore } from "../store/auth/authstore";
import { Mainroute } from "../components/mainroute/Mainroute";

export const AppRouter = () => {
  const state = useAuthorizationStore();
  console.log(state);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <Mainroute></Mainroute>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
