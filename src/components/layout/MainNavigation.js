import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to={"quotes"} style={{ textDecoration: "none", color: "#fff" }}>
          Greats Quotes
        </Link>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to={"/quotes"}
              className={(navData) =>
                navData.isActive ? classes.active : "none"
              }
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/new-quote"}
              className={(navData) =>
                navData.isActive ? classes.active : "none"
              }
            >
              Add a quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
