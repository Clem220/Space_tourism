import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/shared/logo.svg";
import "./Banner.scss";
const NavContainer = styled.nav`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LinkContainer = styled.div`
  width: 50vw;
  display: flex;
  justify-content: space-around;
  flex-grow: 0;
  margin: 0 0 0 507px;
  padding: 40px;
  -webkit-backdrop-filter: blur(81.5px);
  backdrop-filter: blur(81.5px);
  background-color: rgba(255, 255, 255, 0.04);
`;
const NavLink = styled(Link)`
  color: #fff;
`;

function Banner() {
  return (
    <header>
      <NavContainer>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <LinkContainer>
          <NavLink to="/">00 Home</NavLink>
          <NavLink to="/destination">01 Destination</NavLink>
          <NavLink to="/crew">02 Crew</NavLink>
          <NavLink to="/technology">03 Technology</NavLink>
        </LinkContainer>
      </NavContainer>
    </header>
  );
}

export default Banner;
