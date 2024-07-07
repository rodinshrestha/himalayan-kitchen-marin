import React from "react";
import Accordion from "@/components/Accordion";
import DisplayMenu from "../../../DisplayMenu";
import { BEVERAGES } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import drinksHelper from "content/settings/drinks_menu_helper.json";
import Typography from "@/components/Typography";

const Beverages = () => {
  const data = useAllMarkdownData("beverages");

  if (!data.length) return null;

  const { beverages_description = "" } = drinksHelper || {};

  return (
    <div>
      <Typography as="h3" className="menu-title">
        {BEVERAGES}
      </Typography>
      <div className="table-wrapper">
        {beverages_description && (
          <p className="dish-note-content">{beverages_description}</p>
        )}
        <div className="menu-wrapper">
          {data.map((x, i) => {
            return <DisplayMenu name={x.name} price={x.price} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Beverages;
