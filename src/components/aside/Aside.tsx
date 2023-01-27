import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../hooks/redux-hooks";
import Dialogs from "./dialogs/Dialogs";
import Profile from "./profile/Profile";

const WrapperAside = styled.div`
  width: var(--w-aside);
  background-color: var(--color-primary);
  flex-shrink: 0;
`;

const Aside = () => {
  const { navSwitcher } = useAppSelector((state) => state.support);
  const switchAside = (id: string) => {
    switch (id) {
      case "chats":
        return <Dialogs />;
      case "profile":
        return <Profile />;
      default:
        return <Dialogs />;
    }
  };
  return (
    <WrapperAside>
      <>{switchAside(navSwitcher)}</>
    </WrapperAside>
  );
};

export default Aside;
