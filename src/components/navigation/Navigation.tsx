import { Avatar, SvgIcon, Tooltip } from "@mui/material";
import styled from "styled-components";
import { menuItems } from "../../data/navigation";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { removeUser } from "../../store/slice/userSlice";
import { useAuth } from "../../hooks/auth-user";

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
  const { email } = useAuth();
  return (
    <WrapperNavigation>
      <div className="icon_block">
        {menuItems.map((iconElement) => (
          <Tooltip
            title={iconElement.title}
            key={iconElement.id}
            arrow
            placement="right"
          >
            <div className="icon">
              <SvgIcon component={iconElement.icon} />
            </div>
          </Tooltip>
        ))}
      </div>
      <div className="avatar_block">
        <Tooltip title="Dark-mode" arrow placement="right">
          <div className="icon">
            <SvgIcon component={DarkModeOutlinedIcon} />
          </div>
        </Tooltip>
        <div className="icon" onClick={() => dispatch(removeUser())}>
          <Tooltip title={`Log Out ${email}`} arrow placement="right">
            <Avatar />
          </Tooltip>
        </div>
      </div>
    </WrapperNavigation>
  );
};

export default Navigation;
