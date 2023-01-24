import { useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../hooks/auth-user";
import { useAppDispatch } from "../hooks/redux-hooks";
import { removeUser } from "../store/slice/userSlice";

const WrapperAppContent = styled.div`
  display: flex;
  justify-content: space-around;
`;

const AppContent = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuth, email } = useAuth();
  const location = useLocation();
  console.log(location);

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
      <div>
        <div>Nav Bar</div>
        <div>
          <button onClick={() => dispatch(removeUser())}>
            Log Out {email}
          </button>
        </div>
      </div>
      <div>Aside</div>
      <div>
        <Outlet />
      </div>
      <div>User Info</div>
    </WrapperAppContent>
  );
};

export default AppContent;
