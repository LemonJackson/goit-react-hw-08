import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

import clsx from "clsx";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AuthNav() {
  return (
    <div className={css.menu}>
      <NavLink to="/register" className={getNavLinkClass}>
        Sign up
      </NavLink>
      <NavLink to="/login" className={getNavLinkClass}>
        Log In
      </NavLink>
    </div>
  );
}
