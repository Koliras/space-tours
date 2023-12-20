import { styled } from "styled-components";

export const Button = styled.button`
  display: inline-block;
  background-color: #D3EAFF;
  border: 0;
  padding: 12px 0;
  transition: background-color 300ms;
  min-width: 163px;
  width: 100%;
  height: 53px;

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