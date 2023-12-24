import { styled } from "styled-components";
import { ButtonIcon } from "../atoms/ButtonIcon";

const ButtonsWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;

  top: -84px;
  right: 0;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const LittleButtonIcon = styled(ButtonIcon)`
  height: 44px;
  min-width: 44px;
`

export const ButtonGroup = ({ next, previous }: any) => {
  return (
    <ButtonsWrapper>
      <LittleButtonIcon
        type='arrowLeft'
        onClick={() => previous()} />
      <LittleButtonIcon
        type='arrowRight'
        onClick={() => next()} />
    </ButtonsWrapper>
  );
};