import React from "react";
import Accordion from "@/components/Accordion";
import DisplayMenu from "../../../DisplayMenu";
import { CURRY_DISHES } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import menuHelper from "content/settings/kitchen_menu_helper.json";
import Typography from "@/components/Typography";
import { StyledDiv } from "./style";

const Curry = () => {
  const data = useAllMarkdownData("curry_dishes");

  if (!data.length) return null;

  const { curry_dishes_description = "" } = menuHelper || {};

  return (
    <StyledDiv>
      <div className="dish-information-wrapper">
        <Typography as="h3" className="menu-title">
          {CURRY_DISHES}
        </Typography>
        {curry_dishes_description && (
          <Typography as="subtitle2" className="dish-note-content">
            {curry_dishes_description}
          </Typography>
        )}
      </div>
      <div className="menu-wrapper">
        {data.map((x, i) => {
          return (
            <DisplayMenu
              name={x.name}
              desc={x.description}
              price={x.price}
              key={i}
            />
          );
        })}
      </div>
    </StyledDiv>
  );
};

export default Curry;
