import { Avatar } from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const WrapperUserItem = styled.div`
  & > * {
    color: var(--color-text);
    text-decoration: none;
    width: 100%;
    display: block;
    padding: 5px 20px;
    box-sizing: border-box;
    .dialog {
      display: flex;
      align-items: center;
      justify-content: space-between;
      & > div {
        display: flex;
        align-items: center;
        .user_name {
          margin-left: 20px;
        }
      }
      .symbol {
        padding: 2px 5px;
        color: var(--color-text-active);
        background-color: var(--color-label);
        border-radius: 5px;
      }
    }
  }
  .active {
    background-color: var(--color-active);
    color: var(--color-text-active);
  }
`;

interface IUserItem {
  symbol: string | null;
  uid: number | string;
  photo: string | null;
  userName: string;
  newMessage?: number;
}
const UserItem: FC<IUserItem> = ({
  uid,
  photo,
  userName,
  symbol,
  newMessage,
}) => {
  return (
    <WrapperUserItem>
      <NavLink to={`dialog/${uid}`}>
        <div className="dialog">
          <div>
            <div>
              <Avatar src={photo ? photo : ""} sx={{ width: 30, height: 30 }}>
                {userName[0]}
              </Avatar>
            </div>
            <div className="user_name">{userName}</div>
          </div>
          <div>
            {!symbol ? (
              <div
                className="symbol"
                style={
                  newMessage === 0 ? { display: "none" } : { display: "block" }
                }
              >
                {newMessage}
              </div>
            ) : (
              <div className="symbol">{symbol}</div>
            )}
          </div>
        </div>
      </NavLink>
    </WrapperUserItem>
  );
};

export default UserItem;
