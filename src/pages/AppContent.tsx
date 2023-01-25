import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Aside from "../components/aside/Aside";
import Navigation from "../components/navigation/Navigation";
import UserInfo from "../components/user-info/UserInfo";
import { useAuth } from "../hooks/auth-user";

const WrapperAppContent = styled.div`
  height: var(--h-page);
  box-sizing: border-box;
  display: flex;
  overflow-x: hidden;
`;

const AppContent = () => {
  const navigate = useNavigate();
  const { isAuth, email } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (isAuth) {
      if (
        location.pathname === "/authorization" ||
        location.pathname === "/registration"
      ) {
        navigate("/");
      }
    } else {
      navigate("/authorization");
    }
  }, [isAuth]);
  return (
    <WrapperAppContent>
      <Navigation />
      <Aside />
      <Outlet />
      <UserInfo />
    </WrapperAppContent>
  );
};

export default AppContent;
