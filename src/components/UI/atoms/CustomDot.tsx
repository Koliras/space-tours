import { styled } from "styled-components";

const DotWrapper = styled.li`
  cursor: pointer;
`;

export function CustomDot({ onClick, active }: any) {
  return (
    <DotWrapper
      onClick={() => onClick()}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        {active && <circle cx="12.5" cy="12" r="6" fill="#1E1E1E"/>}
        <circle cx="12.5" cy="12" r="11.5" stroke="#1E1E1E"/>
      </svg>
    </DotWrapper>
  );
}