import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { NavigationLink } from "../atoms/NavigationLink";
import { ButtonIcon } from "../atoms/ButtonIcon";
import { Button } from "../atoms/Button";

const HeaderWrapper = styled.div`
  background: rgba(0, 0, 0, 0.4);
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  box-sizing: border-box;
  z-index: 5;
`;

const Logo = styled.img`
  width: 229px;
  height: 32px;
  display: block;
`;

const NavigationWrapper = styled.nav`
  display: flex;
  gap: 32px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

function Header() {
  const handleDisabledLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
  }

  return (
    <HeaderWrapper>
      <NavLink to="/">
        <Logo src="./logo.png" alt="Logo" />
      </NavLink>

      <NavigationWrapper>
        <NavigationLink to="/">
          Home
        </NavigationLink>

        <NavigationLink
          to="disabledLink"
          onClick={handleDisabledLinkClick}
        >
          Tours
        </NavigationLink>

        <NavigationLink
          to="disabledLink"
          onClick={handleDisabledLinkClick}
        >
          About
        </NavigationLink>

        <NavigationLink
          to="disabledLink"
          onClick={handleDisabledLinkClick}
        >
          Help
        </NavigationLink>
      </NavigationWrapper>

      <ButtonsWrapper>
        <ButtonIcon type="like" as={NavLink} to="favorites" />

        <Button>
          Sing in
        </Button>
      </ButtonsWrapper>
    </HeaderWrapper>
  )
}

export default Header;