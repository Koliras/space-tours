import { styled } from "styled-components";

export const ButtonIcon = styled.button<{ type: string }>`
  background-color: #ECECEC;
  background-image: url(${props => `src/assets/${props.type}.svg`});
  background-repeat: no-repeat;
  background-position: center;
  border: 0;
  transition: background-color 300ms;
  width: 53px;
  height: 53px;

  &:hover {
    background-color: #d1d1d1;
    cursor: pointer;
  }

  &:active {
    background-color: #DD377D;
  }
`;