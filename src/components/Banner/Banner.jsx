import { NavLink } from "react-router-dom";
import Logo from "../../assets/shared/logo.svg";
import "./Banner.scss";

function Banner() {
  return (
    <header>
      <nav className="nav">
        <div>
          <img className="nav__logo" src={Logo} alt="logo" />
        </div>
          <div className="nav__border"></div>
        <div className="nav__linkContent">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav__link-active" : "nav__link"
            }
            to="/"
          >
           <span className="nav__link__index">00</span> HOME
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav__link-active" : "nav__link"
            }
            to="/destination"
          >
          <span className="nav__link__index">01</span>DESTINATION
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav__link-active" : "nav__link"
            }
            to="/crew"
          >
           <span className="nav__link__index">02</span>CREW
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav__link-active" : "nav__link"
            }
            to="/technology"
          >
           <span className="nav__link__index">03</span>TECHNOLOGY
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Banner;
