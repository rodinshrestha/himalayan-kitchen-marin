import React from "react";
import DisplayMenu from "../../../DisplayMenu";
import Accordion from "@/components/Accordion";
import { SIDES } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import menuHelper from "content/settings/kitchen_menu_helper.json";
import Typography from "@/components/Typography";

const Sides = () => {
  const data = useAllMarkdownData("sides");

  if (!data.length) return null;

  const { sides_description = "" } = menuHelper || {};

  return (
    <div>
      <div className="dish-information-wrapper">
        <Typography as="h3" className="menu-title">
          {SIDES}
        </Typography>
        {sides_description && (
          <Typography as="subtitle2" className="dish-note-content">
            {sides_description}
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
    </div>
  );
};

export default Sides;
