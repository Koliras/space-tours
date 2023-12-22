import { styled } from "styled-components";
import { MainHeading } from "./MainHeading";

export const Banner = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: top;
`;

export const BannerWrapper = styled.div`
  position: relative;
`;

export const BannerText = styled(MainHeading)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  cursor: default;
  pointer-events: none;
`;
