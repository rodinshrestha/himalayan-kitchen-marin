import Accordion from "@/components/Accordion";
import React from "react";
import DisplayMenu from "../../../DisplayMenu";
import { WHITE_WINES } from "@/modules/KitchenMenu/constant/kitchen-menu-constant";
import useAllMarkdownData from "@/hooks/useAllMarkdownData";
import drinksHelper from "content/settings/drinks_menu_helper.json";
import Typography from "@/components/Typography";

const WhiteWines = () => {
  const data = useAllMarkdownData("white_wines");

  if (!data.length) return null;

  const { white_wine_description } = drinksHelper || {};

  return (
    <div>
      <Typography as="h3" className="menu-title">
        {WHITE_WINES}
      </Typography>
      <div className="table-wrapper">
        {white_wine_description && (
          <p className="dish-note-content">{white_wine_description}</p>
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

export default WhiteWines;
