import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth-user";
import { useAppDispatch } from "../hooks/redux-hooks";
import { removeUser } from "../store/slice/userSlice";

const AppContent = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuth, email } = useAuth();
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    } else {
      navigate("/authorization");
    }
  }, [isAuth]);
  return (
    <div>
      <div>App Content</div>
      <div>
        <button onClick={() => dispatch(removeUser())}>Log Out {email}</button>
      </div>
    </div>
  );
};

export default AppContent;
