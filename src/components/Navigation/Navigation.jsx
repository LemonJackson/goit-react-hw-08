import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { RiContactsBookFill } from "react-icons/ri";
import css from "./Navigation.module.css";

import clsx from "clsx";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.navigation}>
      <Link to="/" className={css.logo}>
        <RiContactsBookFill className={css.icon} />
        <p className={css.text}>ContactBook</p>
      </Link>
      <div className={css.menu}>
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={getNavLinkClass}>
            Contacts
          </NavLink>
        )}
      </div>
    </nav>
  );
}
