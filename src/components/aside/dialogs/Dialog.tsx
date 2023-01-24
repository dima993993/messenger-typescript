import { Avatar } from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const WrapperDialog = styled.div`
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
    }
  }
  .active {
    background-color: var(--color-active);
    color: var(--color-text-active);
  }
`;
type DialogInfo = {
  id: number;
  name: string;
};
interface IDialog {
  dialog: DialogInfo;
}
const Dialog: FC<IDialog> = ({ dialog }) => {
  return (
    <WrapperDialog>
      <NavLink to={`dialog/${dialog.id}`}>
        <div className="dialog">
          <div>
            <div>
              <Avatar sx={{ width: 30, height: 30 }} />
            </div>
            <div className="user_name">{dialog.name}</div>
          </div>
          <div>3</div>
        </div>
      </NavLink>
    </WrapperDialog>
  );
};

export default Dialog;
