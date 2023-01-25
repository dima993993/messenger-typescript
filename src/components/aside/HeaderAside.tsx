import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { SvgIcon } from "@mui/material";
import React from "react";
import styled from "styled-components";

const WrapperHeaderDialogs = styled.div`
  padding: 20px;
  .title {
    font-size: 20px;
    color: var(--color-text);
    font-weight: bold;
  }
  .search {
    background-color: var(--color-input);
    margin: 20px auto;
    display: flex;
    align-items: center;
    border: 1px solid #cccccc;
    border-radius: 5px;
    & > input {
      background-color: var(--color-input);
      border: none;
      outline: none;
      padding: 10px;
      border-radius: 5px;
      width: 80%;
      color: var(--color-text);
    }
    & > div {
      display: flex;
      align-items: center;
      cursor: pointer;
      & > * {
        font-size: 18px;
        color: var(--color-sub-text);
      }
    }
  }
`;

const HeaderDialogs = () => {
  return (
    <WrapperHeaderDialogs>
      <div className="title">Dialogs</div>
      <div className="search">
        <input type="text" placeholder="Search" />
        <div>
          <SvgIcon component={SearchOutlinedIcon} />
        </div>
      </div>
    </WrapperHeaderDialogs>
  );
};

export default HeaderDialogs;
