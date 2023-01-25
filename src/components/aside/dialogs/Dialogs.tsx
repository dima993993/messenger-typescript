import styled from "styled-components";
import Dialog from "./Dialog";
import HeaderAside from "../HeaderAside";

const WrapperDialogs = styled.div``;
const listDialogs = [
  { id: 1, name: "Misha" },
  { id: 2, name: "Kolya" },
  { id: 3, name: "Ivan" },
  { id: 4, name: "Dasha" },
  { id: 5, name: "Sveta" },
  { id: 6, name: "Inna" },
];

const Dialogs = () => {
  return (
    <WrapperDialogs>
      <HeaderAside />
      <div>
        {listDialogs.map((dialog) => (
          <Dialog key={dialog.id} dialog={dialog} />
        ))}
      </div>
    </WrapperDialogs>
  );
};

export default Dialogs;
