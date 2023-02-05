import { Avatar, SvgIcon, Tooltip } from "@mui/material";
import { menuItems } from "../../data/navigation";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { removeUser } from "../../store/slice/authSlice";
import { useAuth } from "../../hooks/auth-user";
import { switchTheme } from "../../store/slice/themeSlice";
import { switchNavBar } from "../../store/slice/supportSlice";
import Theme from "./Theme";
import styled from "styled-components";

const WrapperNavigation = styled.div`
  background-color: var(--color-nav);
  color: var(--color-nav-text);
  width: var(--s-nav);
  position: relative;
  flex-shrink: 0;
  .icon_block {
    height: calc(var(--h-page) - var(--s-nav) - var(--s-nav));
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }
  .icon {
    height: var(--s-nav);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
      font-size: 30px;
    }
    .active {
      color: var(--color-active);
    }
  }
  .avatar_block {
    width: var(--s-nav);
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
  }
`;

const Navigation = () => {
  const dispatch = useAppDispatch();
  const { currentTheme } = useAppSelector((state) => state.theme);
  const { navSwitcher } = useAppSelector((state) => state.support);
  const { authUser }: any = useAppSelector((state) => state.user);
  const { email } = useAuth();

  return (
    <WrapperNavigation>
      <div className="icon_block">
        {menuItems.map((iconElement) => {
          return (
            <Tooltip
              title={iconElement.title}
              key={iconElement.id}
              arrow
              placement="right"
            >
              <div
                className="icon"
                onClick={() => dispatch(switchNavBar(iconElement.id))}
              >
                <SvgIcon
                  component={iconElement.icon}
                  className={navSwitcher === iconElement.id ? "active" : ""}
                />
              </div>
            </Tooltip>
          );
        })}
      </div>
      <div className="avatar_block">
        <Theme currentTheme={currentTheme} switchTheme={switchTheme} />
        <div className="icon" onClick={() => dispatch(removeUser())}>
          <Tooltip title={`Log Out ${email}`} arrow placement="right">
            <Avatar>{"N"}</Avatar>
          </Tooltip>
        </div>
      </div>
    </WrapperNavigation>
  );
};

export default Navigation;
