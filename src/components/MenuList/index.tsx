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

      <li>
        <Button
          href="https://www.opentable.com/r/himalayan-sherpa-kitchen-st-helena"
          className="button special fit"
          rel="noopener noreferrer"
          skin="outline"
          size="lg"
        >
          Reservation
        </Button>
      </li>
      <li>
        <Button
          skin="outline"
          href="tel:1-707-963-4439"
          className="button fit"
          size="lg"
        >
          Phone: (707) 963-4439
        </Button>
      </li>

      <li>
        <a
          href="https://www.yelp.com/biz/st-helena-sherpa-kitchen-st-helena"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={star} alt="yelp" />
        </a>
      </li>
    </StyledUl>
  );
};

export default Menu;
