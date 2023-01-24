import React from "react";
import styled from "styled-components";
import Dialogs from "./dialogs/Dialogs";

const WrapperAside = styled.div`
  width: var(--w-aside);
  flex-shrink: 0;
`;

const Aside = () => {
  return (
    <WrapperAside>
      <Dialogs />
    </WrapperAside>
  );
};

export default Aside;
