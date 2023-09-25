import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const mainNavigation = (props) => (
  <>
    <header className="main-navigation">
      <div className="main-navigation__logo">
        <h1>EasyEvent</h1>
      </div>
      <nav className="main-navigation__items">
        <ul>
          <li>
            <NavLink to={"/auth"}>Auth</NavLink>
          </li>
          <li>
            <NavLink to={"/events"}>Events</NavLink>
          </li>
          <li>
            <NavLink to={"/bookings"}>Bookings</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <div id="main-vite-app">
        <Outlet />
    </div>
  </>
);

export default mainNavigation;
