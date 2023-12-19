import { styled } from "styled-components";

export const NavigationLink = styled.a`
  color: #FFF;
  position: relative;
  text-align: center;
  font-family: Lato;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  transition: all 300ms;

  &::after {
    content: '';
    position: absolute;
    margin: 0 auto;
    bottom: -4px;
    left: 0;
    width: 100%;
    background-color: #FFF;
    border-radius: 4px;
    height: 2px;
    transform: scaleX(0);
    transform-origin: bottom left;
    transition: transform 300ms ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`