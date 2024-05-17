import React from "react";
import { useAuthorizationStore } from "../../store/auth/authstore";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const state = useAuthorizationStore();
  const navigate = useNavigate();

  const login = () => {
    console.log(state.setLoginStatus(""));
    navigate("/home");
  };

  return (
    <div style={{ backgroundColor: "tomato", width: "500px" }}>
      <button onClick={login}>Login</button>
    </div>
  );
};
