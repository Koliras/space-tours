import { styled } from "styled-components";

export const Button = styled.button`
  background-color: #D3EAFF;
  border: 0;
  padding: 12px 0;
  transition: background-color 300ms;
  width: 100%;

  font-family: Syne, sans-serif;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;

  &:hover {
    background-color: #afd6fa;
    cursor: pointer;
  }

  &:active {
    background-color: #86c1f7;
  }
`;