import { FC } from "react";
import styled from "styled-components";

const WrapperTitleBlock = styled.div`
  text-align: center;
  h2 {
    font-size: 30px;
    color: var(--color-text);
  }
  p {
    margin-top: 10px;
    font-size: 14px;
    color: var(--color-sub-text);
  }
`;
interface ITitleBlock {
  title: string;
  subTitle: string;
}

const TitleBlock: FC<ITitleBlock> = ({ title, subTitle }) => {
  return (
    <WrapperTitleBlock>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </WrapperTitleBlock>
  );
};

export default TitleBlock;
