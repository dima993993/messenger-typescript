import styled from "styled-components";
import UserItem from "../UserItem";
import HeaderAside from "../HeaderAside";

const WrapperDialogs = styled.div``;
const listDialogs = [
  { id: 1, name: "Misha", newMessage: 3 },
  { id: 2, name: "Kolya", newMessage: 5 },
  { id: 3, name: "Ivan", newMessage: 7 },
  { id: 4, name: "Dasha", newMessage: 0 },
  { id: 5, name: "Sveta", newMessage: 0 },
  { id: 6, name: "Inna", newMessage: 1 },
];

const Dialogs = () => {
  return (
    <WrapperDialogs>
      <HeaderAside title="Dialogs" />
      <div>
        {listDialogs.map((dialog) => (
          <UserItem key={dialog.id} item={dialog} symbol={null} />
        ))}
      </div>
    </WrapperDialogs>
  );
};

export default Dialogs;
