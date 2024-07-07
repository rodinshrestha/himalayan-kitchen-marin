import React from "react";
import { Link } from "gatsby";
import star from "@/assets/images/4star.png";
import Button from "../Button";
import { StyledUl } from "./style";
import clsx from "clsx";
import { navLink } from "@/route/route";

const Menu = () => {
  return (
    <StyledUl className="menu-list-wrapper">
      {navLink.map((x) => {
        const { pathname } = window.location;

        const active = pathname === x.url;
        return (
          <li className={clsx("link-item", { active })} key={x.url}>
            <Link to={x.url}>{x.label}</Link>
          </li>
        );
      })}
    </StyledUl>
  );
};

export default Menu;
