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
            00 HOME
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav__link-active" : "nav__link"
            }
            to="/destination"
          >
            01 DESTINATION
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav__link-active" : "nav__link"
            }
            to="/crew"
          >
            02 CREW
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav__link-active" : "nav__link"
            }
            to="/technology"
          >
            03 TECHNOLOGY
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Banner;
